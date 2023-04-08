import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../assets/images/avatar.jpg";
import { Context } from "../context/Store";

const Header = ({scroller}) => {
    const location = useLocation()
    const {state:{userDetails}}=useContext(Context)
    console.log(location.pathname);
    return (
        <Cover>
            <Top>
                <div className="wrapper">
                    <TopLeft>
                        <ProfilePic>
                            <img src={Avatar} alt="image" />
                        </ProfilePic>
                        <UserDetail>
                            <h3>{userDetails.name}</h3>
                            <SpanCover><span>Student</span><span>{userDetails.points}{" "}IQ</span></SpanCover>
                        </UserDetail>
                    </TopLeft>
                    <EditButton>Edit ccount</EditButton>
                </div>
            </Top>
            <Bottom scroller={scroller}>
                <div className="wrapper">
                    <BottomLeft>
                        <ul>
                            <li className={location.pathname == '/' ? 'active' : null}><Root to='/'>Dashboard</Root></li>
                            <li className={location.pathname == '/course' ? 'active' : null}><Root to='/course'>Courses</Root></li>
                            <li className={location.pathname == '/discussion' ? 'active' : null}><Root to='/discussion'>Discussions</Root></li>
                        </ul>
                    </BottomLeft>
                    <span>Profile</span>
                </div>
            </Bottom>
        </Cover>
    );
};

export default Header;
const Cover = styled.div``;
const Top = styled.div`
    height: 180px;
    background: #307bbf;
    border-bottom:.5px solid #eee;
    div{
        &.wrapper{
            height: 100%;
            display: flex;
            justify-content:space-between;
            align-items:center;
        }
    }
`;
const TopLeft = styled.div`
    display: flex;
    align-items:center;
    gap:20px;
`;
const UserDetail = styled.div`
    h3{
        color:#fff;
        font-size:26px ;
        margin-bottom:5px;
        text-transform:uppercase;
    }
`;
const ProfilePic = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #fff;

    img {
        width: 100%;
        heigt: 100%;
        border-radius: 50%;
    }
`;
const SpanCover = styled.div`
    display: flex;
    gap:20px;
    color:#fff;
`;
const EditButton = styled.div`
    width: 100px;
    height:35px;
    border:1px solid #eee;
    color:#fff;
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:5px ;
`;
const Bottom = styled.div`
    background: #307bbf;
    height: 50px;
    position:${({scroller})=>scroller > 190 ? 'fixed' : 'inherit'};
    width:${({scroller})=>scroller > 190 ? '100%' : 'inherit'};
    top:0;
    left:0;
    z-index:100;
    transition:.4s ease;
    span{
        color:#fff;
    }
    div{
        &.wrapper{
            height:100%;
            display: flex;
            align-items:center;
            justify-content:space-between;
        }
    }
`;
const BottomLeft = styled.div`
    ul{
        list-style:none;
        display: flex;
        gap:15px;
        li{
            color:#eee;
            font-weight:300;
            &.active{
                position: relative;
                color:#fff;
                font-weight:700 ;
                &::after{
                    content: '';
                    width:100%;
                    height:3px;
                    border-radius:10px;
                    position: absolute;
                    bottom: -5px;
                    left:0;
                    background: #fff;
                    transition: .4s ease;
                }
            }
        }
    }
`;
const Root = styled(Link)`
    color:#fff;
`;