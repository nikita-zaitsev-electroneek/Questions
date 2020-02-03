import React from 'react';
import s from './App.module.css';
import Questions from "./questions/Questions";

function App(props) {
    return (
        <div className={s.app}>
            <Questions state = {props.state} condition = {props.condition}/>
        </div>
    );
}
export default App;
