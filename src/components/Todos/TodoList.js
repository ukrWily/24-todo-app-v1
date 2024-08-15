import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map((todo, i) => <Todo todo={todo} key={i} />);
}

export default TodoList;
