import axios from "axios"

const getAll = () => async(dispatch)=>{
    const response = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type: "GET_ALL",
            payload: response.data
            })   
}
const add = (payload)=>{
    return {
        type: "ADD_ITEM",
        payload
    }
}
export {add, getAll}