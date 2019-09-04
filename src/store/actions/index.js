// Action Types
export const ADD_TODO = 'ADD_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

// Action Creators

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const requestTodos = () => {
  return dispatch => {
    setTimeout(function() {
      const dummyTodos = ['Learn Redux', 'Learn React'];
      dispatch(receiveTodos(dummyTodos));
    }, 2000);
  };
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};
