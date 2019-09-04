import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../store/actions/';

const Home = props => {
  const {todos, addTodo} = props;
  const [todo, setTodo] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  const handleTodoChange = event => {
    setTodo(event.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>
      <p>Welcome to my Todo App</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={handleTodoChange} />
        <input type="submit" />
      </form>
      <pre>
        <code>{JSON.stringify(todos, null, 4)}</code>
      </pre>
    </>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
