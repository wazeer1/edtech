import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Angular from '../../assets/images/angular.png'
import { Context } from "../../context/Store";
import { axiosConfig } from "../../general/accountConfig";

const CoursesWidget = ({course}) => {
    const {state:{userData:{access}},state,dispatch}=useContext(Context)
    const [courses, setCourses] = useState([])
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
    return (
        <Cover>
            <Top>
                <h4>Courses</h4>
                <Routeing to="/">My Courses</Routeing>
            </Top>
            <WidgetContainer>
                <Widget course={course}>
                    <ImageContainer>
                        <img src={courses[0]?.image} alt="image"/>
                    </ImageContainer>
                    <Content>
                        <span>Learn Angular</span><box-icon name='heart' type='solid' color="gray"></box-icon>
                    </Content>
                </Widget>
                <Widget course={course}>
                    <ImageContainer>
                        <img src={courses[1]?.image} alt="image"/>
                    </ImageContainer>
                    <Content>
                        <span>Learn Angular</span><box-icon name='heart' type='solid' color="red"></box-icon>
                    </Content>
                </Widget>
                <Widget course={course}>
                    <ImageContainer>
                        <img src={courses[2]?.image} alt="image"/>
                    </ImageContainer>
                    <Content>
                        <span>Learn Angular</span><box-icon name='heart' type='solid' color="red"></box-icon>
                    </Content>
                </Widget>
                <Widget course={course}>
                    <ImageContainer>
                        <img src={courses[3]?.image} alt="image"/>
                    </ImageContainer>
                    <Content>
                        <span>Learn Angular</span><box-icon name='heart' type='solid' color="red"></box-icon>
                    </Content>
                </Widget>
                
            </WidgetContainer>
        </Cover>
    );
};

export default CoursesWidget;
const Cover = styled.div``;
const Top = styled.div`
    justify-content: space-between;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    h4{
        font-size:20px;
    }
`;
const Routeing = styled(Link)`
    text-decoration:underline;
    font-size:12px;
`;
const WidgetContainer = styled.div`
    display: flex;
    gap:15px;
`;
const Widget = styled.div`
    width:${({course})=>course ? '23%' : '48%'};
    height:190px;
    background: #fff;
    border-radius:7px;
    overflow: hidden;
    
`;
const ImageContainer = styled.div`
    height:75%;
    background: #2668aa;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width:100px;
        object-fit:contain;
    }
`;
const Content = styled.div`
    height:25%;
    display: flex;
    align-items:center;
    padding:5px 7px;
    justify-content:space-between;
    box-icon{
        color:red;
    }
`;