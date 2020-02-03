import React from 'react';
import s from "./Info.module.css";

const Info = (props) => {
    let elem = props.state.filter( ques => ques.id == props.elemState[0])[0];
    let condition = () => {
        props.condition('start', elem.id)
    }
    return(
        <div className={s.questions}>
            {props.elemState[1] + ' ' + elem.type + ' ' + elem.text} <br/>
            <button onClick={condition} disabled={props.elemState[4]}>{elem.buttonMessage}</button>
        </div>
    )
}

export default Info