import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../context/Store'
import { axiosConfig } from '../general/accountConfig'
import DiscussModal from '../includes/reuse/DiscussModal'
import QuestionCard from '../includes/reuse/QuestionCard'

const Discussion = () => {
    const {state:{userData:{access}}}=useContext(Context)
    const [questionDatas, setQuestionDatas]= useState([])
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState(false)
    const [isModal,setIsModal]=useState(false)
    useEffect(()=>{
        axiosConfig.get('discussions/questions/').then(function(res){
            if(res.data.StatusCode == 6000){
                setQuestionDatas(res.data.data)
            }
            else{
                setError(true)
                setErrorMessage(res.data.data.message)
            }
        })
    },[])
  return (
    <Cover>
        <div className='wrapper'>
        <h4>Discussion</h4>
            <Container>
                <Top>
                    <Left>
                        <input type="text" placeholder='Search discussions'/>
                    </Left>
                    <Right>
                        <ul>
                            <li>
                                <select>
                                    <option selected disabled>All topics</option>
                                    <option>Angular</option>
                                    <option>React</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option selected disabled>Newest</option>
                                    <option >Angular</option>
                                    <option>React</option>
                                </select>
                            </li>
                            <li>
                                <AskButton onClick={()=>setIsModal((prev)=>!prev)}>Ask a question</AskButton>
                            </li>
                        </ul>
                    </Right>
                </Top>
                <Bottom>
                  {error ? <p>{errorMessage}</p>: questionDatas.map((item)=>(
                    <QuestionCard datas={item}/>
                  )) }
                </Bottom>
            </Container>
        </div>
        {isModal && <DiscussModal isModal={isModal} setIsModal={setIsModal}/>}
    </Cover>
  )
}

export default Discussion
const Cover = styled.div`
    padding: 40px 0px;
    background: #eee;
    
`;
const Container = styled.div`
    width:100%;
    /* height:500px; */
    background: #fff;
    margin-top:20px;
    border-radius:7px;
`;
const Top = styled.div`
    padding: 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #141414;
`;
const Left = styled.div`
    width: 20%;
    background: #eee;
    input{
        padding: 10px 7px;
        width: 100%;
        background: #eee;;
    }
`;
const Right = styled.div`
    ul{
        display: flex;
        list-style:none;
        gap:25px;
        align-items:center;
        li{
            select{
                border:none;
                outline:none;
                padding: 5px 10px;
            }
        }
    }
`;
const AskButton = styled.div`
    padding: 8px 14px;
    background: red;
    color:#fff;
    font-weight:700;
    cursor:pointer;
`;
const Bottom = styled.div`
    padding:10px 0px;
    p{
        text-align:center;
    }
`;