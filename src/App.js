import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  //
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  //
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  //
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
