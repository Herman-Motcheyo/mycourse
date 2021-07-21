import React ,{Component} from 'react';

class Question extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e)=>{
      e.preventDefault();
      this.props.onChoiceChange(e.target.value);
    }

    render(){
        const question = this.props.question;

        return(
            <div className="well">
                <h3>{question.text}</h3>
                <hr></hr>
                <ul className="list-group">{
                    question.choices.map(choice =>{
                        return(
                            <li className="list-group-item" key={choice.id}>
                            {choice.id} 
                            <input type="radio" onChange={this.handleChange} name ={question.id} value ={choice.id}/>
                            {choice.text}
                        </li>
                        );
                    }
                    )}</ul>
            </div>
        );
    }
}

export default Question;