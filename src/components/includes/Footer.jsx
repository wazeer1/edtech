import React from "react";
import styled from "styled-components";

const footerData = [
    {
        id: 1,
        name: "Learn",
        subheads: ["library", "Features", "Explore", "Learning Path"],
    },
    {
        id: 2,
        name: "Join Us",
        subheads: ["Pricing", "Login", "Signup", "Payments"],
    },
    {
        id: 3,
        name: "Community",
        subheads: [
            "Discussion",
            "Ask Questions",
            "Student Profile",
            "Instructor Profile",
        ],
    },
];

const Footer = () => {
    return (
        <>
            <Cover>
                <div className="wrapper">
                    <Left>
                        {footerData.map((item) => (
                            <SingleDta>
                                <h2>{item.name}</h2>
                                {item.subheads.map((subs) => (
                                    <h3>{subs}</h3>
                                ))}
                            </SingleDta>
                        ))}
                    </Left>
                    <Right>
                        <h2>Tutoria</h2>
                        <p>
                            Tutoria is online learning platform that helps
                            anyone achieve their personal and professional
                            goals.
                        </p>
                    </Right>
                </div>
            </Cover>
            <FooterBottom>
                <div className="wrapper">
                    <LeftBottom>
                        <Social>
                            <h5>Follow us</h5>
                            <SpanContainer>
                                <span>
                                    <box-icon
                                        name="facebook-square"
                                        type="logo"
                                    ></box-icon>
                                </span>
                                <span>
                                    <box-icon
                                        name="twitter"
                                        type="logo"
                                    ></box-icon>
                                </span>
                                <span>
                                    <box-icon
                                        name="twitch"
                                        type="logo"
                                    ></box-icon>
                                </span>
                                <span>
                                    <box-icon
                                        name="youtube"
                                        type="logo"
                                    ></box-icon>
                                </span>
                            </SpanContainer>
                        </Social>
                        <LanguageButton>English</LanguageButton>
                    </LeftBottom>
                </div>
            </FooterBottom>
        </>
    );
};

export default Footer;
const Cover = styled.div`
    padding: 50px 0px;
    div {
        &.wrapper {
            display: flex;
            justify-content: space-between;
        }
    }
`;
const Left = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
`;
const SingleDta = styled.div`
    h2 {
        font-size: 18px;
        color: #6e7379;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 14px;
        color: #b3b1ba;
        margin-bottom: 10px;
    }
`;
const Right = styled.div`
    width: 20%;
    h2 {
        font-size: 22px;
        color: #6e7379;
        margin-bottom: 20px;
        text-align: right;
    }
    p {
        font-size: 14px;
        text-align: right;
        color: #b3b1ba;
    }
`;
const FooterBottom = styled.div`
    padding: 30px 0px;
    background: #455a6d;
`;
const Social = styled.div`
    h5 {
        color: #eee;
    }
    span {
        padding: 3px;
        width: 25px;
        height: 25px;
        background: #eee;
        margin-right: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const LeftBottom = styled.div`
    display:flex;
    align-items:center;
    gap:25px;
    border-radius:7px;
`;
const SpanContainer = styled.div`
    display:flex;
    padding-top:10px;
`;
const LanguageButton = styled.div`
    padding:8px 8px;
    border:1px solid #eee;
    color:#eee;
    width:120px;
    display:flex;
    align-items:center;
    justify-content:center;
`;