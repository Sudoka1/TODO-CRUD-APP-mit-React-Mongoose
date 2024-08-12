// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = (newTodo) => {
    axios.post('/api/todos', newTodo)
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  const updateTodo = (updatedTodo) => {
    axios.put(`/api/todos/${updatedTodo._id}`, updatedTodo)
      .then(response => setTodos(todos.map(todo => todo._id === updatedTodo._id ? response.data : todo)))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};
export default App;