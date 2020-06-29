import { composeWithDevTools } from "redux-devtools-extension";
import todos from "./reducer";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
    todos,
    composeWithDevTools(
        applyMiddleware()
    )
);

export default store;