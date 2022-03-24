import React from "react";
import styled from "styled-components";
import "../index.css";
//아이콘 임포트
//import GitHubIcon from '@mui/icons-material/GitHub';

const Header = (props) => {
   
   


    return (
        <>
            <Outter>
                <Logo>
                    <img alt="logo" src="img/yr.png" />
                    <h1>RYURIM</h1>
                </Logo>
                <Navi>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Tech blog</li>
                    <li>Projects</li>
                    <li>
                        {/* <GitHubIcon style={{
                        cursor: "pointer",
                        transform: "scale(1.3,1.3)",
                        color: "#704040",
                        }}
                        onClick={() => window.open('https://github.com/ryurim0109', '_blank')}
                        /> */}
                    </li>
                </Navi>
            </Outter>


        </>
    );
};

const Outter =styled.div`
    width: 100%; 
    height: 120px; 
    padding: 0 3%;
    position: fixed; top:0; left: 0;
    background: #FFE6E6;
    z-index: 99; 
    display:flex;
    align-items:center;
    justify-content: space-between;

`;

const Logo =styled.div`
    width:100px;
    margin:0;
    display:flex;
    position:relative;
    top: -60px;

    & > img{
        width:100px;
        position:absolute;
    }
    & > h1{
        width:100px;
        font: bold 1.25rem "Fredok";
        position:absolute;
        top:80px;
        color: #704040;
        cursor: pointer;
        text-align:center;
    }
`;

const Navi =styled.ul`
    display:flex;
    justify-content: space-around;
    gap: 3vh;
    font: bold 1.25rem "Fredok";

    & > li{
        cursor: pointer;
    }
    & > li:hover{
        color:#A54646;
        transition: 0.1s;
    }
`;

export default Header;