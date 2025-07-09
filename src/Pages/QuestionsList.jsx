import React, { useState } from "react";
function QuestionsList({question,options,handleClick,curentAnswer,handleNext,curIndex,questions,score}){
return (
    <div className="container">   
        <h1>Quiz App</h1>
        <hr/>
        <h2>{curIndex+1}.{question}</h2>
        <ul>
            {options.map((option,index)=>(
             <li key={index} onClick={()=>handleClick(option)} className={curentAnswer===option ?"correct":"wrong"}>{option}</li>           
            ))}
        </ul>
      <button onClick={()=>handleNext(curIndex)}>Next</button>
      <div className="index">{curIndex+1} of {questions.length}</div>
      
    </div>
)
}
export default QuestionsList ;