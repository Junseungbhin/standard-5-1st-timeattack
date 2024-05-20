//흑흑 시간이 부족했어요
import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const removeGoal = (id) => {
    setTodos(todos, filter((goal) => goal.id !== id));
  };

  const changeGoal = (id) => {
    setTodos(todos.map((goal) =>
      goal.id === id ? { ...goal, complete: !goal.complete } : goal
    ));
  };

  return (
    <li>
      <h3>{todo.title}</h3>
      <span>{todo.content}</span>
      <div>
        <button onClick={() => removeGoal(todo.id)}>삭제하기</button>
        <button onClick={() => changeGoal(todo.id)} className={todo.complete ? 'incomplete-btn' : 'complete-btn'}>
          {todo.complete ? "취소": "완료"}
        </button>
      </div>
    </li>
  ) 
}

export default TodoItem