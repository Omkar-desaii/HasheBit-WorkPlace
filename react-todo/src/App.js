import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false, subTodos: [] };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    if (todoToDelete.subTodos.length > 0) {
      if (
        window.confirm(
          "This todo has sub-todos. Are you sure you want to delete it?"
        )
      ) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
