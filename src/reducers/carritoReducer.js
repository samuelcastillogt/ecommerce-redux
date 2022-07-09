const carrito = []
const carrtioReducer = (state = carrito, action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
    }
}

