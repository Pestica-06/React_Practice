import React from 'react';

const TodoList = ({ todos, removeTodo, startEditing }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>
          <button onClick={() => startEditing(index)}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
