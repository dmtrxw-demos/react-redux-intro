import {ADD_TODO, RECEIVE_TODOS} from '../actions/';

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return { ...state, todos: action.todos };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.text]};
    default:
      return state;
  }
}

export default todoReducer;
