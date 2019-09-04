// Action Types
export const ADD_TODO = 'ADD_TODO';

// Action Creators
export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};
