import React from 'react';

const TodoList= ({ todos }) => {
  return (
    <ul>
     {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
            onClick={() => onDeleteTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
