import info from "./data/Info";
import open from "./data/Open";
import single from "./data/Single";
import {rerenderTree} from "../render";

let state = info.concat(single, open);
state.questions = [['1_1', 'q1', 0, true, false]];
let count = 1

export let condition = (param, id) => {
    let index = 'q' + ++count;
    let addQuestion = (id) => {
        state.questions.push([id, index, param])
    }
    let addTypeCondition = (textCondition) => {
        state.push({"id": index, "type": "Condition", "text": textCondition})
        state.questions.push([index])
        index = 'q' + ++count
    }
    if(param == 'start'){
        addQuestion('2_1')
    }
    if(id == '2_1'){
        if(param == 0){addTypeCondition( 'q' + (count - 1) + '==0'); addQuestion('2_2')}
        else {addTypeCondition( 'q' + (count - 1) + '!=0'); addQuestion('1_2')}
    }
    if(id == '2_2'){
        addQuestion('3_1')
    }
    if(id == '3_1'){
        addQuestion('1_3')
    }
    state.questions = state.questions.map((elem, index, arr) => {
        if(index == state.questions.length - 1){return [elem[0], elem[1], 0]}
        if(index == state.questions.length - 2){return [ elem[0], elem[1], arr[index+1][2], false, true]}
        if(index == state.questions.length - 3){
            if(arr[state.questions.length - 2][0][0] == 'q'){
                return  [ elem[0], elem[1], arr[index+2][2], false, true]
            }
        }
        return  [ elem[0], elem[1], elem[2], false, true]
    })

    rerenderTree(state)
}

export default state