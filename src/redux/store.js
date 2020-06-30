import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import todos from "./reducer";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
    todos,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;