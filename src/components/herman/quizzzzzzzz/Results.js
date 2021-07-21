import React from 'react';

class Results extends React.Component{
  
    render(){
        const score = this.props.score ;
        const total = this.props.total ;
        const percent = score/total*100;
        var message =" You passed the quizz";
        var link = <a href="#root">Take Again</a>

        return(
            <div className="well">
                <h4> You Got {score} out of {total} Corret</h4>
                <hr/>
                <h1>{percent}% - {percent >60 ? message : link}</h1>
            </div>
        );
    };
}
export default Results;