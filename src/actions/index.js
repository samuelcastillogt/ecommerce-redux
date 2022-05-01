import axios from "axios"

const getAll =()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response => {
        return {
            type: "GET_ALL",
            payload: response.data
        }
        }
    )
}
const add = (payload)=>{
    return {
        type: "ADD_ITEM",
        payload
    }
}
export {add, getAll}