import React ,{Component} from 'react';
import Results from './Results';
import Scorebox from './Scorebox';
import Question from './Question';

class Quiz extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            score :0,
            current : 1
        }
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(choice){
        this.setState((prevState , props)=>({
            current : this.current +1,
            score : choice === props.questions[prevState.current-1].correct ? prevState.score+1 : prevState.score
        }))
    }

    render(){
        const question = this.props.questions;
        return(
            <div>
                 {this.state.current > question.length && 
                  <Results total ={question.length} score={this.state.score} />
                 }
                 {
                     this.state.current <= question.length && 
                     <Scorebox total = {question.length } current = {this.state.current} score={this.state.score}/>
                 }

                 {
                     this.state.current <= question.length && 
                     <Question question={question[this.state.current -1]} onChoiceChange = {this.handleChange}/>
                 }
            </div>
        );
    };
}
export default Quiz;