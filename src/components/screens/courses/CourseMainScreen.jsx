import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../includes/reuse/Button";
import Angular from "../../assets/images/angular.png";
import CoursesWidget from "../../includes/reuse/CoursesWidget";
import LearnCard from "../../includes/reuse/LearnCard";
import { Context } from "../../context/Store";
import { axiosConfig } from "../../general/accountConfig";
import FlintLogo from '../../assets/images/flinto.png'
import Trophyhero from '../../assets/images/trophy.png'

const CourseMainScreen = () => {
    const {
        state: {
            userData: { access },
        },
    } = useContext(Context);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axiosConfig
            .get("programs/courses/", {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
            .then(function (res) {
                if (res.data.StatusCode == 6000) {
                    setCourses(res.data.data);
                }
            });
    }, []);
    return (
        <Cover>
            <div className="wrapper">
                <CurrentCourse>
                    <CoverImage>
                        <Content>
                            <h1>Introduction to typescript</h1>
                            <span>50 minutes left</span>
                            <span>12 lessons</span>
                            <div>
                                <Button
                                    bg="#fff"
                                    content="resume"
                                    color="#000"
                                />
                                <Button
                                    bg="#307bbf"
                                    content="start over"
                                    color="#fff"
                                />
                            </div>
                        </Content>
                    </CoverImage>
                    <Container>
                        <Left>
                            <ImageContainer>
                                <img src={Angular} />
                            </ImageContainer>
                            <div>
                                <h4>Angular Fundamentals</h4>
                            </div>
                        </Left>
                    </Container>
                </CurrentCourse>
            </div>
            <NextContainer>
                <div className="wrapper">
                    <LearningPaths>
                        {courses.map((item) => (
                            <LearnCard cardData={item} width="48%" />
                        ))}
                    </LearningPaths>
                    <CoursesWidget course={true} />
                    <Achievements>
                        <AchievementBox>
                            <AchievTop>
                                <Ctop>
                                    <h5>ACHIEVMENT</h5>
                                    <h6>Jun 5,2018</h6>
                                </Ctop>
                                <ProgramLogo>
                                    <img src={FlintLogo} alt="image" />
                                </ProgramLogo>
                            </AchievTop>
                            <AchievBottom>
                                <TrophyImage>
                                    <img src={Trophyhero} alt="image" />
                                </TrophyImage>
                                <ContentAch>
                                    <h3>Flinto</h3>
                                    <p>
                                        Introduction to The App design
                                        Application
                                    </p>
                                </ContentAch>
                            </AchievBottom>
                        </AchievementBox>
                        <AchievementBox>
                            <AchievTop>
                                <Ctop>
                                    <h5>ACHIEVMENT</h5>
                                    <h6>Jun 5,2018</h6>
                                </Ctop>
                                <ProgramLogo>
                                    <img src={FlintLogo} alt="image" />
                                </ProgramLogo>
                            </AchievTop>
                            <AchievBottom>
                                <TrophyImage>
                                    <img src={Trophyhero} alt="image" />
                                </TrophyImage>
                                <ContentAch>
                                    <h3>Flinto</h3>
                                    <p>
                                        Introduction to The App design
                                        Application
                                    </p>
                                </ContentAch>
                            </AchievBottom>
                        </AchievementBox>
                    </Achievements>
                </div>
            </NextContainer>
        </Cover>
    );
};

export default CourseMainScreen;
const Cover = styled.div`
    padding: 50px 0px 0px 0px;
`;
const CurrentCourse = styled.div`
    background: #fff;
`;
const CoverImage = styled.div`
    width: 100%;
    height: 300px;
    background: #307bbf;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    text-align: center;
    div {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-top: 10px;
    }
    h1 {
        color: #fff;
    }
    span {
        color: #eee;
        margin-right: 30px;
    }
`;
const Container = styled.div`
    margin-top: 20px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 80px;
    padding: 5px;

    img {
        width: 100%;
    }
`;
const LearningPaths = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &.div {
        width: 48%;
    }
`;
const NextContainer = styled.div`
    background: #eee;
    padding: 40px 0px;
`;
const Achievements = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 40px 0px;
`;
const AchievementBox = styled.div`
    background: #2668ac;
    height: 230px;
    border-radius: 5px;
    padding:15px;
    width:48%;
    
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
`;const AchievBottom = styled.div`
display:flex;
align-items:center;
gap:70px;
`;