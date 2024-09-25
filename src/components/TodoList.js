import React, { useEffect, useState } from 'react';
import { getTodos, updateTodoStatus } from '../services/todoService';
import TodoItem from './TodoItem';
import '../styles/Todo.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todoList = await getTodos();
      setTodos(todoList);
    };
    fetchTodos();
  }, []);

  const updateStatus = (id, status) => {
    updateTodoStatus(id, status);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateStatus={updateStatus} />
      ))}
    </div>
  );
};

export default TodoList;