import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodos from './useTodo';

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodoDone, countTodos, countPendingTodos } = useTodos();

  return (
    <div>
      <p>Total Todos: {countTodos()}</p>
      <p>Pending Todos: {countPendingTodos()}</p>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodoDone} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
