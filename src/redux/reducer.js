import * as actions from '../redux/actions';

const initTodos = {
    todos: [],
    severConnect: false
};

const todos = (state = initTodos, action) => {
    switch (action.type) {
        case actions.GET_TODOS:
            console.log(action.payload)
            return {
                ...state,
                todos: action.payload,
                severConnect: true
            };
        case actions.POST_CREATE_TODO:
            return {...state,
                todos: [...state.todos, action.payload],
                severConnect: true
            };
        case actions.PUT_STATUS_UPDATE_TODO:
            const updatedStatus = state.todos.map(todo => {
                if(todo._id === action.payload.id){
                    return {...todo, done: action.payload.status}
                } else {
                    return todo;
                }
            });
            return {...state,
                todos: updatedStatus,
                severConnect: true
            };
        case 'PATCH_UPDATE_TODO':
            const updatedState = state.todos.map(todo => {
                if(todo._id === action.payload._id){
                    return action.payload;
                } else {
                    return todo;
                }
            });
            return {...state,
                todos: updatedState,
                severConnect: true
            };
        case actions.DELETE_TODO:
            const filteredState = state.todos.filter(todo => todo._id !== action.id);
            return {...state,
                todos: filteredState,
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
