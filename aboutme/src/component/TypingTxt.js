import React, { useState, useEffect } from 'react';
import '../App.css'

const TypingTxt = ({text, speed, fontSize, color, fontFamily}) => {
  TypingTxt.defaultProps = {
    fontSize: '1em', //기본값
    color: 'black',//기본값
    fontFamily: 'NanumB'
  }
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : 100;//기본값
    const interval = setInterval(() => {
        setText((Text)=>{
          let updated = Text;
          updated = Text + typingText[Count];
          return updated;
        });
        setCount(Count + 1); 
    }, typingSpeed);
    Count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
})
  return (
    <p style={{fontSize:`${fontSize}`, color:`${color}`,fontFamily:`${fontFamily}`}} >{ Text }</p>
  )
};

export default TypingTxt;