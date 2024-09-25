import React from 'react';
import '../styles/Todo.css';

const TodoItem = ({ todo, updateStatus }) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>Status: {todo.status}</p>
      <select onChange={(e) => updateStatus(todo.id, e.target.value)} value={todo.status}>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TodoItem;