// client/src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title,
      completed: false
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;