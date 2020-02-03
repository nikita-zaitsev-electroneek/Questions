import React from 'react';
import Info from "./Info/Info";
import Single from "./Single/Single";
import Open from "./Open/Open";

const Content = (props) => {
    if(props.state.filter( el => el.id == props.elemState[0])[0].type == 'Info'){
        return(
            <div>
                <Info state={props.state} elemState = {props.elemState} condition = {props.condition}/>
            </div>
        )
    } else if(props.state.filter( el => el.id == props.elemState[0])[0].type == 'Open'){
        return(
            <div>
                <Open state={props.state} elemState = {props.elemState} condition = {props.condition}/>
            </div>
        )
    } else {
        return(
            <div>
                <Single state={props.state} elemState = {props.elemState} condition = {props.condition}/>
            </div>
        )
    }
}

export default Content