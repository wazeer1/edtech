import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "boxicons";
import Chart from 'react-apexcharts';
import FlintLogo from '../assets/images/flinto.png'
import Trophyhero from '../assets/images/trophy.png'
import CoursesLearns from "./courses/CoursesLearns";
import { Context } from "../context/Store";


const Dashboard = () => {
    const {state:{userDetails}}=useContext(Context)
    const options = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91]
          }
        ],
        xaxis: {
          categories: ['Javascript', 'html', 'Flinto', 'Vue.js', 'Sketch', 'Principle', 'Css', 'Angular']
        }
      };

    return (
        <Cover>
            <div className="wrapper">
                <SubEnd>
                    <h4>
                        <box-icon name="time-five"></box-icon>
                        Your subscription ends on <span>{userDetails.end_date}</span>
                    </h4>
                    <span>Upgrade</span>
                </SubEnd>
                <GraphSections>
                    <WebGraph>
                        <GraphTop>
                            <GraphTleft>
                                <h3>116</h3>
                                <Gcontainer>
                                    <h4>Angular</h4>
                                    <h5>Best Score</h5>
                                </Gcontainer>
                            </GraphTleft>
                            <span>Popular Topics<box-icon name='chevron-down' ></box-icon></span>
                        </GraphTop>
                        <Chart options={options} series={options.series} type="radar" height={330} />
                    </WebGraph>
                    <GraphContainer>
                        <LineGraph>
                            <GraphTop>
                                <GraphTleft>
                                    <h3>432</h3>
                                    <Gcontainer>
                                        <h4>Experiance IQ</h4>
                                        <h5>4 days streak this weak</h5>
                                    </Gcontainer>
                                </GraphTleft>
                                <span><box-icon name='line-chart' ></box-icon></span>
                            </GraphTop>
                            <Chart options={options} series={options.series} type="line" height={150} />
                        </LineGraph>
                        <AchievementBox>
                            <AchievTop>
                            <Ctop>
                                <h5>ACHIEVMENT</h5>
                                <h6>Jun 5,2018</h6>
                                </Ctop>
                                <ProgramLogo>
                                    <img src={FlintLogo} alt='image'/>
                                </ProgramLogo>
                            </AchievTop>
                            <AchievBottom>
                                <TrophyImage>
                                    <img src={Trophyhero} alt="image"/>
                                </TrophyImage>
                                <ContentAch>
                                    <h3>Flinto</h3>
                                    <p>Introduction to The App design Application</p>
                                </ContentAch>
                            </AchievBottom>
                        </AchievementBox>
                    </GraphContainer>
                </GraphSections>
                <CoursesLearns/>
            </div>
        </Cover>
    );
};

export default Dashboard;
const Cover = styled.div`
    background: #eee;
    div {
        &.wrapper {
            padding: 40px 0px;
        }
    }
`;
const SubEnd = styled.div`
    height: 40px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 0px 10px;
    color: #6e6570;
    margin-bottom: 30px;
    &::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background: red;
        left: 0;
        top: 0;
    }
    h4 {
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 5px;
        span {
            font-weight: 700;
        }
    }
`;
const GraphSections = styled.div`
    display: flex;
    justify-content: space-between;
`;
const WebGraph = styled.div`
    background: #fff;
    width: 49%;
    height: 380px;
    border-radius: 5px;
`;
const LineGraph = styled.div`
    width: 100%;
    background: #fff;
    height: 230px;
    border-radius: 5px;
`;
const AchievementBox = styled.div`
    background: #2668ac;
    height: 230px;
    border-radius: 5px;
    padding:15px;
`;
const GraphContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const GraphTop = styled.div`
    padding: 10px;
    border-bottom:.5px solid #6e6570;
    display: flex;
    justify-content:space-between;
    align-items:center;
    span{
        color:#6e6570;
        cursor: pointer;
        display: flex;
        align-items:center;
    }
`;
const GraphTleft = styled.div`
    display: flex;
    align-items:center;
    gap:10px;
    h3{
        font-size:38px;
        color:red;
    }
`;
const Gcontainer = styled.div`
    h4{
        font-size:16px;
        color:#6e6570;
    }
    h5{
        color:#6e6570;
        font-size:14px;
    }
`;
const AchievTop = styled.div`
    color:#fff;
    display:flex;
    justify-content :space-between;
    h5{
        font-size:18px;
    }
    h6{
        font-size:14px;
    }
`;
const Ctop = styled.div`
    margin-left:30px;
`;
const ProgramLogo = styled.div`
    width: 60px;
    img{
        width:100%;
    }
`;
const AchievBottom = styled.div`
display:flex;
align-items:center;
gap:70px;
`;
const TrophyImage = styled.div`
    width:130px;
    
    img{
        width:100%;
    }
`;
const ContentAch = styled.div`
    color:#fff;
    h3{
        font-size:24px;
    }
    p{
        width:80%;
    }
`;