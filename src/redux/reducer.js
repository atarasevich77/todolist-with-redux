
let id = 0;

const initTodos = {
    serverConnect: false,
    todos: [
        {id: ++id, title: 'First', done: false},
        {id: ++id, title: 'Second', done: true}
    ]
};

const todos = (state = initTodos, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state,
                todos: [...state.todos, {id: ++id, title: action.title, done: false}]
            };
        case 'TODO_UPDATE':
            const updatedState = state.todos.map(todo => {
                if(todo.id === action.todo.id){
                    return action.todo;
                } else {
                    return todo;
                }
            });
            return {...state, todos: updatedState};
        case 'TODO_DELETE':
            const filteredState = state.todos.filter(todo => todo.id !== action.todo.id);
            return {...state, todos: filteredState};
        default:
            return state;
    }
}

export default todos;
