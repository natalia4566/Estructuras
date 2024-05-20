import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
