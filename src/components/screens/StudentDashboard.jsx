import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import CourseMainScreen from "./courses/CourseMainScreen";
import Dashboard from "./Dashboard";
import Discussion from "./Discussion";

const StudentDashboard = () => {
    const [scroller, initScroller] =useState(0);
    console.log(scroller);
    const handleScroll = () => {
        const position = window.pageYOffset;
        initScroller(position);
    };
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    },[])
    return (
        <Cover>
            <Header scroller={scroller}/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/course" element={<CourseMainScreen/>}/>
                <Route path="/discussion" element={<Discussion/>}/>
            </Routes>
            <Footer/>
        </Cover>
    );
};

export default StudentDashboard;
const Cover = styled.div``;
