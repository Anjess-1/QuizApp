import React from "react";

export default function ScoreBox(props) {

    return(
        <div>
           <h5> Score:{props.score} </h5>
           <h5> Difficulty level:{props.level}</h5>
           <h5>Question Num: {props.QuesNum} </h5>
        </div>
    )
}