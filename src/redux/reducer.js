import api from "../api/config";

const initTodos = {
    todos: [],
    severConnect: false
};

const todos = (state = initTodos, action) => {
    switch (action.type) {
        case 'API_TODO_INIT':
            return {
                ...state,
                todos: action.payload,
                severConnect: true,
            };
        case 'API_TODO_ADD':
            return {...state,
                todos: [...state.todos, action.payload]
            };
        case 'API_TODO_ERROR':
            return {
                ...state,
                severConnect: false,
            };

        // case 'TODO_UPDATE':
        //     const updatedState = state.todos.map(todo => {
        //         if(todo._id === action.todo._id){
        //             return action.todo;
        //         } else {
        //             return todo;
        //         }
        //     });
        //     return {...state, todos: updatedState};
        // case 'TODO_DELETE':
        //     const filteredState = state.todos.filter(todo => todo._id !== action.id);
        //     return {...state, todos: filteredState};
        default:
            return state;
    }
}

export default todos;
