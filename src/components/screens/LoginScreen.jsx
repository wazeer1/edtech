import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../assets/images/avatar.jpg";
import { Context } from "../context/Store";
import { axiosConfig } from "../general/accountConfig";

const LoginScreen = () => {
    const [isLogin, setLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [lemail, setLemail] = useState("");
    const [lpassword, setLpassword] = useState("");
    const navigation = useNavigate();
    const { state, dispatch } = useContext(Context);
    const [programData,setProgramData]=useState([])
    const [selectedPlan,setSelectedPlan] = useState('')
    console.log(state.userData);
    console.log(selectedPlan,"sele");
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("hello world");
        axiosConfig
            .post("accounts/register/", {
                name: name,
                email: email,
                password: password,
                plan : selectedPlan
            })
            .then((res) => {
                if (res.data.StatusCode == 6000) {
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                            isVerified: true,
                            access: res.data.data.access.access,
                        },
                    });
                    navigation("/");
                } else {
                    setError(true);
                    setErrorMessage(res.data.data.message);
                    setTimeout(() => {
                        setError(false);
                    }, 1000);
                }
            });
    };
    useEffect(()=>{
        axiosConfig.get('programs/programs/').then(function(res){
            if(res.data.StatusCode == 6000){
                setProgramData(res.data.data)
            }
        })
    },[])
    const handleLogin = (e) => {
        e.preventDefault();
        axiosConfig
            .post("accounts/login/", {
                email: lemail,
                password: lpassword,
            })
            .then(function (res) {
                if (res.data.StatusCode == 6000) {
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                            isVerified: true,
                            access: res.data.data.access.access,
                        },
                    });
                    navigation("/");
                } else {
                    setError(true);
                    setErrorMessage(res.data.data.message);
                    setTimeout(() => {
                        setError(false);
                    }, 1000);
                }
            });
    };
    return (
        <Cover>
            <Container>
                <SwitchContainer>
                    <Buttons
                        className={!isLogin ? "active" : null}
                        onClick={() => setLogin(false)}
                    >
                        Register
                    </Buttons>
                    <Buttons
                        className={isLogin ? "active" : null}
                        onClick={() => setLogin(true)}
                    >
                        Login
                    </Buttons>
                </SwitchContainer>
                {!isLogin ? (
                    <RegisterContainer>
                        <ProfilePic>
                            <img src={Avatar} alt="image" />
                            <input type="file" />
                        </ProfilePic>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <select onChange={(e)=>setSelectedPlan(e.target.value)}>
                        <option selected disabled>select plan</option>
                            {programData?.map((item)=>(
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                        {error ? <p>{errorMessage}</p> : null}
                        <input
                            type="submit"
                            value="Register"
                            className="submit"
                            onClick={(e) => handleRegister(e)}
                        />
                    </RegisterContainer>
                ) : (
                    <RegisterContainer>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setLemail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            onChange={(e) => setLpassword(e.target.value)}
                            required
                        />
                        
                        {error ? <p>{errorMessage}</p> : null}
                        <input
                            type="submit"
                            value="Login"
                            className="submit"
                            onClick={(e) => handleLogin(e)}
                        />
                    </RegisterContainer>
                )}
            </Container>
        </Cover>
    );
};

export default LoginScreen;
const Cover = styled.div`
    height: 100vh;
    /* background:#eee; */
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: "";
        width: 100%;
        height: 50%;
        background: #307bbf;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;
const Container = styled.div`
    width: 40%;
    height: 60%;
    background: #eee;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    padding: 50px;
    display: flex;
    align-items: center;
`;
const SwitchContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 45px;
    /* background: red; */
    top: 0;
    left: 0;
    display: flex;
    /* border-bottom: 1px solid #141414; */
`;
const Buttons = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    background: #ffffff60;
    &.active {
        background: inherit;
    }
    /* &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 90%;
        background: #141414;
        right: 0;
        top: 2px;
    } */
`;
const RegisterContainer = styled.form`
    width: 100%;
    p {
        color: red;
        font-size: 14px;
        text-align: center;
    }
    input {
        width: 100%;
        margin-bottom: 20px;
        height: 35px;
        padding: 5px 7px;
        border-radius: 10px;
        &.submit {
            background: #307bbf;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
        }
    }
    select{
         width: 100%;
        margin-bottom: 20px;
        height: 35px;
        padding: 5px 7px;
        border-radius: 10px;
    }
`;
const ProfilePic = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #141414;
    padding: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        ::-webkit-file-upload-button {
            visibility: hidden;
        }
    }
    img {
        width: 100%;
        border-radius: 50%;
    }
`;
