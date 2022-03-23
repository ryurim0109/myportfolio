import React from "react";
import styled from "styled-components";
import "./index.css";
import { TypingMultiline } from 'react-kr-typing-anim';

const Main = (props) => {
   


    return (
        <>
            <MainOutter>
                <TyingBox>
                <TypingMultiline
                    strs={
                    `안녕하세요.
                    꾸준히 성장하는
                    프론트엔드 개발자를 꿈꾸는
                    김유림입니다!`
                    }
                />
                </TyingBox>
            </MainOutter>





        </>
    );
};

const MainOutter =styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position:relative;
    top:120px;
    background:#FFE6E6;
    padding: 0 3%;
`;

const TyingBox =styled.div`
    width:100%;
    margin:20vh 0;
    font: bold 2rem/50px "NanumB"
`;
export default Main;