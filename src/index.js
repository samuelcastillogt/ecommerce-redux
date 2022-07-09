import React from "react"
import ReactDom from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import storeReducer from "./reducers/storeReducer"
import thunk from "redux-thunk"
import reducers from "./reducers/storeReducer"
const store = createStore(reducers, applyMiddleware(thunk))
import App from "./routes/App"
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
     , document.getElementById("root")
)
