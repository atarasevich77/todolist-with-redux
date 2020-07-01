import * as actions from '../redux/actions';

const initTodos = {
    todos: [],
    severConnect: false
};

const todos = (state = initTodos, action) => {
    switch (action.type) {
        case actions.GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                severConnect: true
            };
        case actions.GET_FAILURE:
            return {
                ...state,
                severConnect: false
            };
        default:
            return state;
    }
}

export default todos;
