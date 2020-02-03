import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {condition} from "./redux/state";


export let rerenderTree = (state) => {
    ReactDOM.render(<App state = {state}
                         condition = {condition}/>,
        document.getElementById('root'));
}
