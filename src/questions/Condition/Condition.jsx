import React from 'react';
import s from "./Condition.module.css";

const Condition = (props) => {
    let elem = props.state.filter( ques => ques.id == props.elemState[0])[0];
    return(
        <div className={s.questions}>
            {elem.id + ' ' + elem.type + ' ' + elem.text}
        </div>
    )
}

export default Condition