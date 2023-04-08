import React from 'react'
import styled from 'styled-components'
import Avatar from '../../assets/images/avatar.jpg'

const QuestionCard = ({datas}) => {
  return (
    <Cover>
        <Left>
            <ProfilePics>
                <img src={Avatar} alt="image"/>
            </ProfilePics>
            <Content>
                <h6>2 days ago</h6>
                <h4>{datas.user_details.name}</h4>
            </Content>
        </Left>
        <Center>
            <h4>{datas.question}</h4>
        </Center>
        <Answers>
            <h2>{datas.answer_count}</h2>
            <h4>Answers</h4>
        </Answers>
    </Cover>
  )
}

export default QuestionCard
const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #eee;
`;
const Left = styled.div`
    display: flex;
    align-items:center;
    gap:15px;
    
`;
const ProfilePics = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    border:1px solid #000;
    img{
        width:100%;
        height:100%;
        border-radius:50%;
        padding: 2px;
    }
`;
const Content = styled.div`
h6{
        color:#adadab;
    }
    h4{
        color:#272f35;
    }
`;
const Center = styled.div`

`;
const Answers = styled.div`
    text-align:center;
`;