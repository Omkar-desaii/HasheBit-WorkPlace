import React, { useState } from 'react';
import SubTodo from './SubTodo';

const Todo = ({ todo, todos, setTodos, deleteTodo }) => {
  const [subTodoTitle, setSubTodoTitle] = useState('');

  const handleAddSubTodo = () => {
    if (subTodoTitle.trim()) {
      const newSubTodo = { id: Date.now(), title: subTodoTitle, completed: false };
      const updatedTodos = todos.map(t => t.id === todo.id ? 
        { ...t, subTodos: [...t.subTodos, newSubTodo] } : t);
      setTodos(updatedTodos);
      setSubTodoTitle('');
    }
  };

  const toggleCompletion = (id, isSubTodo = false) => {
    const updatedTodos = todos.map(t => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      if (isSubTodo) {
        t.subTodos = t.subTodos.map(sub => {
          if (sub.id === id) {
            sub.completed = !sub.completed;
          }
          return sub;
        });
        t.completed = t.subTodos.every(sub => sub.completed);
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const deleteSubTodo = (id) => {
    const updatedTodos = todos.map(t => {
      if (t.id === todo.id) {
        t.subTodos = t.subTodos.filter(sub => sub.id !== id);
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleCompletion(todo.id)} 
      />
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <div>
        <input 
          type="text" 
          value={subTodoTitle} 
          onChange={(e) => setSubTodoTitle(e.target.value)} 
          placeholder="Add a new sub-todo" 
        />
        <button onClick={handleAddSubTodo}>Add SubTodo</button>
      </div>
      <ul>
        {todo.subTodos.map(subTodo => (
          <SubTodo 
            key={subTodo.id} 
            subTodo={subTodo} 
            toggleCompletion={toggleCompletion} 
            deleteSubTodo={deleteSubTodo} 
          />
        ))}
      </ul>
    </li>
  );
};

export default Todo;
