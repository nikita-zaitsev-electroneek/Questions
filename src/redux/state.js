import info from "./data/Info";
import open from "./data/Open";
import single from "./data/Single";
import {rerenderTree} from "../render";


let state = info.concat(single, open);
state.questions = [['1_1', 'q1', , true, false]];
let count = 1
export let condition = (param, id) => {
    count++;
    let index = 'q' + count
    if(param == 'start'){
        state.questions.push(['2_1', index, param]);
    }
    if(id == '2_1'){
        if(param == 0){state.questions.push(['2_2', index, param])}
        else {state.questions.push(['1_2', index, param])}
    }
    if(id == '2_2'){
        state.questions.push(['3_1', index, param])
    }
    if(id == '3_1'){
        state.questions.push(['1_3', index, param])
    }
    state.questions = state.questions.map((elem, index, arr) => {
        if(index == state.questions.length - 1){return [elem[0], elem[1], 0]}
        if(index == state.questions.length - 2){return [ elem[0], elem[1], arr[index+1][2], false, true]}
        return  [ elem[0], elem[1], elem[2], false, true]
    })
    rerenderTree(state)
}

export default state

/*
   сделать выбранный первый радиобаттон по умолчанию
   сделать сохранение в формате json
   разобраться с компонентой condition
*/