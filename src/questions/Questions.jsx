import React from 'react';
import Content from "./Content";

const Questions = (props) => {
    let arrQue = props.state.questions.map(el => <Content state = {props.state} elemState = {el} condition = {props.condition}/>)
    return (
        <div>
            {arrQue}
        </div>
    )
}

export default Questions