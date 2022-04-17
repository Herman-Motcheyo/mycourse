import React, { Component } from 'react';

const LoadQuizz = (props) => {
   // console.log(props)
    console.log(props.data[props.currentQuestion]);
//alert(props.data[props.currentQuestion].a);

    //    const quizzStepByStep = props.data.map((value)=>{
    return (
        <div className="quiz-header">
            <h2 id="question">{props.data[props.currentQuestion]}</h2>
            <ul>
                <h1> dans Quizz</h1>
                <li>
                    <input
                        type="radio"
                        id="a"
                        name="answer"
                        className="answer"
                    />
                    <label id="a_text" htmlFor="a">{props.data.a}</label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="b"
                        name="answer"
                        className="answer"
                    />
                    <label id="b_text" htmlFor="b">{props.data.b}</label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="c"
                        name="answer"
                        className="answer"
                    />
                    <label id="c_text" htmlFor="c">{props.data.c}</label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="d"
                        name="answer"
                        className="answer"
                    />
                    <label id="d_text" htmlFor="d">{props.data.d}</label>
                </li>
            </ul>
        </div>
    )
    //  })
    {/**  return (
       <div>
           {quizzStepByStep}
       </div>
    ); */}
}
export default LoadQuizz;