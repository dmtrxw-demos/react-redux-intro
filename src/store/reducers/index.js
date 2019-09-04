import {ADD_TODO} from '../actions/';

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, action.text]};
    default:
      return state;
  }
}

export default todoReducer;
