import React from 'react';
import s from "./Single.module.css";

const Info = (props) => {
    let elem = props.state.filter( ques => ques.id == props.elemState[0])[0];
    let answers = elem.answers.map( (ans, index) => {
            let answerJSX = (x) => {
                return <div>
                    <input type="radio" name={props.elemState[1]} value={ans.text} className={props.elemState[1]}
                           checked={x}/>{ans.text}<br/>
                </div>
            }
            if (props.elemState[3] == undefined) {
                return answerJSX(props.elemState[3])
            } else {
                if (index == props.elemState[2]){
                    return answerJSX(true)
                } else {
                    return answerJSX(false)
                }
            }
        }
    )
    let condition = () => {
        let changeAnswers = document.getElementsByClassName(props.elemState[1]);
        for(let i = 0; i < changeAnswers.length; i++){
            if(changeAnswers[i].checked == true){
                props.condition(i, props.elemState[0])
            }
        }
    }
    return(
        <div className={s.questions}>
            {props.elemState[1] + ' ' + elem.type + ' ' + elem.text} <br/>
            {answers}
            <button onClick={condition} type="submit" disabled={props.elemState[4]}>Подтвердить выбор</button>
        </div>
    )
}

export default Info