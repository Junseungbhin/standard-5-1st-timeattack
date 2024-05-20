import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = ({todos, setTodos}) => {
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoContainer