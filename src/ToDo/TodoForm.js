import React, { useState } from 'react';
import TodoList from './Todolist';
import "./Todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState(''); 

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    if (editText) {
      setTodos(todos.map((todo, i) => (i === editIndex ? editText : todo)));
      setEditIndex(null);
      setEditText('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={editIndex === null ? addTodo : updateTodo}>
        <input 
          type="text" 
          value={editIndex === null ? newTodo : editText} 
          onChange={(e) => (editIndex === null ? setNewTodo(e.target.value) : setEditText(e.target.value))} 
          placeholder="Add or Edit a todo" 
        />
        <button type="submit">{editIndex === null ? 'Add' : 'Update'}</button>
      </form>
      <TodoList 
        todos={todos} 
        removeTodo={removeTodo} 
        startEditing={startEditing} 
      />
    </div>
  );
};

export default TodoApp;
