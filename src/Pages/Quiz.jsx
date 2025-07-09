import React, { useState } from "react";
import QuestionsList from "./QuestionsList";
import './Style.css'
import Score from "./Score";
function Quiz (){
    const questions = [
        {
           question : "What is React?",
           options  :  ["CSS Framework","React FrameWork","React Library"],
           answer   :  "React Library"
        },
        {
      question: "Which device is required for the Internet connection?",
      options : ["Modem","Router","LAN Cable","Pen Drive"],
      answer  : "Modem"
        },
        {
      question: "Which continent has the highest number of countries?",
      options: ["Asia","Europe","North America","Africa"],
      answer:   "Africa"
        },
        {
      question: "Junk e-mail is also called?",
      options:["Spam","Fake","Archived","Bin"],
      answer :"Spam"
        },
        {
      question: "First page of Website is termed as?",
      options: ["Index Page","Homepage","Sitemap"],
      answer: "Homepage",
        }
    ]
    const [curIndex,setCurIndex] = useState(0) ;
    const [curentAnswer,setCurentAnswer] = useState(null) ;
    const [score,setScore] = useState(0) ;
    const handleClick=(option)=>{
           setCurentAnswer(option);
           if(option === questions[curIndex].answer)
            setScore(score+1) ;
           
    }
    const handleNext = ()=>{
         setCurIndex(curIndex+1) ;
         setCurentAnswer(null) ;
         
    }
    const handlNext = ()=>{
        setCurIndex(0) ;
        setCurentAnswer(null) ;
        setScore(0) ;
    }
    return (
        <div>
           {curIndex < questions.length ? <div><QuestionsList question = {questions[curIndex].question}
            options = {questions[curIndex].options} handleClick = {handleClick}
            curentAnswer = {curentAnswer} handleNext = {handleNext} questions = {questions}
            curIndex = {curIndex} 
            />
            </div>:<div>
              <Score handlNext= {handlNext} score = {score} curIndex = {curIndex}/>
            </div>
          }
            </div>
    )

}
export default Quiz ;