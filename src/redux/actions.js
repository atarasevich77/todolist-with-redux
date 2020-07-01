export const GET_TODOS = 'GET_TODOS';
export const GET_FAILURE = 'GET_FAILURE';

export const getFailure = (error) => ({
    type: GET_FAILURE,
    payload: error
});

export const getTodos = (todos) => ({
    type: GET_TODOS,
    payload: todos
});

