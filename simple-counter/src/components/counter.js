import { Component } from 'react';


class Counter extends Component {

    constructor(props) {
        super()
        this.state = {
            value: 0
        }
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    discrement  = ()=>  {
        this.setState({
            value:this.state.value -1
        })
    }
    remettre0  = ()=>  {
        this.setState({
            value:0
        })
    }

    render() {
        return (
            <div className='bg-blue-300 text-center' >
                
                <div class="w-1/3 p-2">
                    <div class="text-gray-700 text-center bg-gray-400 p-2"><h1 >Welcome to my app counter</h1></div>
                </div>
                <button onClick={this.increment}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Incrementer
                </button>
                <p>{this.state.value}</p>
                <button onClick={this.discrement}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Decrementer
                </button>
                <p>Merci</p>
                <button onClick={this.remettre0}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Mettre à zero
                </button>
            </div>
        )
    }
}
export default Counter;