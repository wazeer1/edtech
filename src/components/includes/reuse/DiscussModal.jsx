import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/Store";
import { axiosConfig } from "../../general/accountConfig";

const DiscussModal = ({isModal,setIsModal}) => {
    const [course,setCourses] = useState([])
    const [question,setQuestion] = useState('')
    const [topic,setTopic] = useState('')
    const {state:{userData:{access}},state,dispatch}=useContext(Context)
    useEffect(()=>{
        axiosConfig.get('programs/courses/',{
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }).then(function(res){
            if(res.data.StatusCode==6000){
                setCourses(res.data.data)
            }
        })
    },[])
    const handleSubmit = () =>{
        axiosConfig.post('discussions/add-question/',{
            question:question,
            topic:topic
        },{
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }).then(function(res){
            console.log(res);
        })
    }
    return (
        <Cover>
            <Container>
                <Top>
                    <h3>Ask you Question</h3><h2 onClick={()=>setIsModal((prev)=>!prev)}>X</h2>
                </Top>
                <Bottom>
                    <textarea placeholder="Enter your query...." onChange={(e)=>setQuestion(e.target.value)}></textarea>
                    <select onChange={(e)=>setTopic(e.target.value)}>
                    <option selected disabled>topic</option>
                        {course.map((item)=>(
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </Bottom>
                <SubmitButton onClick={()=>handleSubmit()}>Submit</SubmitButton>
            </Container>
        </Cover>
    );
};

export default DiscussModal;
const Cover = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #00000060;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    border-radius: 7px;
    width: 60%;
    padding: 40px;
    background: #fff;
`;
const Top = styled.div`
    padding-bottom:20px;
    border-bottom:1px solid #eee;
    display:flex;
    justify-content:space-between;
    h2{
        cursor: pointer;
    }
`;

const Bottom = styled.div`
padding: 30px 0px;
    textarea{
        width: 100%;
        height:150px;
        border: none;
        outline :none;
        border:1px solid #eee;
        margin-bottom:20px ;
        padding: 20px;
    }
    select{
        width:100%;
        height:35px;
        border:none;
        padding:5px 7px;
        outline: none;
        border:1px solid #eee;
    }
`;
const SubmitButton = styled.div`
    width:150px;
    height:40px;
    background: #307bbf;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    float:right;
    cursor:pointer;
`;