import React, { Component, useState } from 'react';
import LoadQuizz from './LoadQuizz';
import data from '../../../question/index';

class Quizz extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            isValid: false,
            currentQuestion: 0
        }
    }

    next = (e) => {
        var x = 1;
        console.log(data)
        //console.log(data.question[this.state.currentQuestion]);
    }

    render() {

        var x = 0;
        return (
                <div className="quiz-container" id="quiz">
              <LoadQuizz data={data} questionId={this.state.currentQuestion}/>
                    <button id="submit" onClick={this.next}>Submit</button>
                </div>
        );
    };
}

export default Quizz;