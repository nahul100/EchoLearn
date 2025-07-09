import React, { useState } from "react";
import './Style.css'
function Score({score,handlNext,curIndex}){
    return (
     <div className="scr">
     <h1 style={{textAlign:"center",color:"green"}}>Your score is {score}</h1>
     
     <button className="btn" onClick={()=>handlNext(curIndex)}>Reset</button>
     </div>
    )
}
export default Score ;