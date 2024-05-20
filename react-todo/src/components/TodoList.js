import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, addTodo, deleteTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = () => {
    if (todoTitle.trim()) {
      addTodo(todoTitle);
      setTodoTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
