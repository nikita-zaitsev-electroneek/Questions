import React from 'react';
import s from "./Open.module.css";

const Open = (props) => {
    let elem = props.state.filter( answer => answer.id == props.elemState[0])[0];
    let textAnswer = React.createRef();
    let condition = () => {
        props.condition(textAnswer.current.value, props.elemState[0])
    }
    return(
        <div className={s.questions}>
            {props.elemState[1] + ' ' + elem.type + ' ' + elem.text} <br/>
            <input type="text" ref={textAnswer} /> <br/>
            <button onClick={condition} disabled = {props.elemState[4]}>Подтвердить ответ</button>
        </div>
    )
}

export default Open