import React from 'react';
import './Modal.css';

export default function Modal(props) {
    return (
        <div className="Modal"
            style={{
                transform: props.visible ? 'translateY(0vh) ' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0'
            }} >
            <button onClick={props.cache}>X</button>
            <p>Lorem ipsum dolor sit amet consectetur adipLorem ipsum dolor sit amet consectetur adip
                isicing elit. Beatae exercitationem deserunt nostrum
                laboriosam aliquid eum minima a dolorem quas Lorem ipsum dolor sit amet consectetur adip
                Lorem ipsum dolor sit amet consectetur adip
                Lorem ipsum dolor sit amet consectetur adip
                ratione non aut expedita blanditiis asperiores ab, voluptatem cumque optio est? Lorem ipsum dolor sit amet consectetur adip
            </p>
        </div>
    )
}
