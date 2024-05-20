import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoContainer from "./components/TodoContainer"

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4, title: "리액트 공부하기", content: "리액트 문법 공부하기", complete: false },
    { id: uuidv4, title: "리액트 공부하기", content: "리액트 문법 공부하기", complete: true }
  ])

  return (
    <>
      <header>
        <h1>투두리스트 타임어택</h1>
      </header>
      <TodoContainer todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App
