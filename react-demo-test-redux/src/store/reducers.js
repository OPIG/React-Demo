import { ADD_ITEM, HANDLE_ADD_CLICK, CHANG_VAL, HANDLE_DEL_CLICK} from "./actionTypes"

const defaultState = {
    inputVal: 'test',
    arrList: ['1',2]
}
export default (state = defaultState, action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action?.type) {
        case CHANG_VAL:
            newState.inputVal = action.value
        break;
        case HANDLE_ADD_CLICK: 
            newState.arrList.push(newState.inputVal)
            newState.inputVal = ''
        break;
        case HANDLE_DEL_CLICK:
            newState.arrList.splice(action.value, 1)
        default:
            break;
    }
    return newState
}