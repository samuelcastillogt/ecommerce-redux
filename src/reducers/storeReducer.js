import { combineReducers } from "redux"

const storeReducer = (state = [], action)=>{
    switch(action.type){
         case "GET_ALL":
            return action.payload
        default:
            return state    
    }
}
const carrtioReducer = (state = [], action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
        default: state
    }
    return state
}
const reducers = combineReducers({storeReducer, carrtioReducer})
export default reducers