import React from 'react'
import styled from 'styled-components';
import CoursesWidget from '../../includes/reuse/CoursesWidget';
import CoursesList from './CoursesList';

const CoursesLearns = () => {
  return (
    <Cover>
        <Left>
            <CoursesList/>
        </Left>
        <Right>
            <CoursesWidget/>
        </Right>
    </Cover>
  )
}

export default CoursesLearns
const Cover = styled.div`
    width:100%;
    display:flex;
    margin-top:30px ;
    justify-content:space-between;
`;
const Left = styled.div`
    width:48%;
`;
const Right = styled.div`
    width:48%;
`;