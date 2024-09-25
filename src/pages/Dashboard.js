import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import { getTodos } from '../services/todoService';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos(); // Fetch todos from the service
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>My Tasks</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default Dashboard;