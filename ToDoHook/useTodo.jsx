import React, { useState, useEffect } from 'react';

const useTodo = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, isDone: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoDone = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  const countTodos = () => todos.length;
  const countPendingTodos = () => todos.filter((todo) => !todo.isDone).length;

  return { todos, addTodo, deleteTodo, toggleTodoDone, countTodos, countPendingTodos };
};

export default useTodo;
