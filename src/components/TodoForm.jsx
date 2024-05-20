import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm  = ({todos, setTodos}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
}

const addGoals = (e) => {
  e.preventDefault();
  if (!title || !content) {
    alert("제목과 내용 둘 다 입력하세요");
    return;
  }

  const todoId = {
    id: uuidv4(),
    title,
    content,
    complete: false
  };

  setTodos([...todos, todoId]);
  setTitle("");
  setContent("");

  return (
    <form onSubmit={addGoals}>
      <h4>제목</h4>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h4>내용</h4>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={title}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가하기</button>
    </form>
  )
}

export default TodoForm