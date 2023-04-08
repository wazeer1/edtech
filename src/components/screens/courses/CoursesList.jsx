import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/Store";
import { axiosConfig } from "../../general/accountConfig";
import LearnCard from "../../includes/reuse/LearnCard";

const CoursesList = () => {
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
                <h4>Learning Paths</h4>
                <Routeing to="/">My learning paths</Routeing>
            </Top>
            <Bottom>
                <LearnCard cardData={courses[0]}/>
                <LearnCard cardData={courses[1]}/>
                <LearnCard cardData={courses[2]}/>
            </Bottom>
        </Cover>
    );
};

export default CoursesList;
const Cover = styled.div`
    width:100%;
    /* margin-top:30px ; */
`;
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
const Bottom = styled.div`

`;