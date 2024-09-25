export const getTodos = async () => {
    const response = await fetch('/api/todos');
    return await response.json();
  };
  
  export const updateTodoStatus = async (id, status) => {
    await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
  };