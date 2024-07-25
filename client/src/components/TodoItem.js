// client/src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => updateTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
