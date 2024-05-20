import React from 'react';

const SubTodo = ({ subTodo, toggleCompletion, deleteSubTodo }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={subTodo.completed} 
        onChange={() => toggleCompletion(subTodo.id, true)} 
      />
      {subTodo.title}
      <button onClick={() => deleteSubTodo(subTodo.id)}>Delete</button>
    </li>
  );
};

export default SubTodo;
