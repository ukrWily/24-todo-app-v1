import "./App.css";
import TodoForm from "./components/Todos/TodoForm";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo App</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
