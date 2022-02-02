import './style.css';


import React, { useState } from 'react';

function TempCom() {

    const [temp_value, setTempValue] = useState(0);
    const [color, setColor] = useState("");

    const view = (e) => {
        if (temp_value > 15)
            setColor('orange')
        else
            setColor('aqua')
    }
    const Increment = () => {
        if (temp_value <= 30) {
            setTempValue(temp_value + 1)
            view(temp_value)
        }
    }
    const Decrement = () => {
        if (temp_value > 0) {
            setTempValue(temp_value - 1)
            view(temp_value)
        }
    }

    return (
        <div className='bg-gray-300  text-center'>
            <div className="card">
                <div className="card-header">3. Temperature Control App</div>
                <div className="content" style={{ backgroundColor: 'gray' }}>
                    <div className="rounded-full  box-content" style={{ backgroundColor:color }}><p style={{fontWeight:'bold', fontSize:'65px'}}> {temp_value}³C</p></div>

                    <div className ="button-el">
              
                        <div onClick={Decrement} className=" btn rounded-full  bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4" style={{ margin: "15px" }}>
                            -
                        </div>
                        <div onClick={Increment} className=" btn rounded-full  bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4" style={{ margin: "15px" }}>
                            +
                        </div>
                    </div>
                </div>

                <div className="action">



                </div>
            </div>
        </div>
    )
}

export default TempCom;