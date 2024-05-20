import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h2>WORKING</h2>
      <ul>
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <h2>DONE</h2>
      <ul>
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList