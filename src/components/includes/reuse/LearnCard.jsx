import React, { useContext, useState } from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/angular.png";
import { Context } from "../../context/Store";
import { axiosConfig } from "../../general/accountConfig";

const LearnCard = ({cardData,width}) => {
    const {state:{userData:{access}},state,dispatch}=useContext(Context)

    const handleCourse =(id)=>{
        axiosConfig.get(`programs/start-courses/${id}/`,{
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }).then(function(res){
            if (res.data.StatusCode == 6000){

            }
        })
    }
    
    return (
        <Cover width={width}>
            <LeftCover>
                <Logo>
                    <img src={cardData?.image} alt="angular" />
                </Logo>
                <div>
                    <h4>{cardData?.name}</h4>
                    <h6>{cardData?.lessons} courses</h6>
                </div>
            </LeftCover>
            <span onClick={()=>cardData?.is_started ? null : handleCourse(cardData?.id)}>{cardData?.is_started ? 'Resume' : 'Start'}</span>
        </Cover>
    );
};

export default LearnCard;
const Cover = styled.div`
    height: 50px;
    background: #fff;
    border-radius: 7px;
    width:${({width})=>width};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 10;
    span {
        padding: 5px 8px;
        font-size: 16px;
        cursor: pointer;
    }
`;
const LeftCover = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Logo = styled.div`
    width: 50px;
    background: #2668aa;
    border-radius: 7px;

    img {
        width: 100%;
    }
`;
const Shadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    bottom: -5px;
    border: #141414;
    left: 5px;
    z-index: 2;
`;
