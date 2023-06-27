import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const oncontentChangeHandler = (event) => {
    const newContent = event.target.value;
    setContent(newContent);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      title,
      content,
    };

    if (title === "" || content === "") alert("모두 입력하세요!");
    else {
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <nav>
      <div className="inputBox">
        <div>
          <span>제목</span>
          <input type="text" onChange={onTitleChangeHandler} value={title} />
        </div>
        <div>
          <span>내용</span>
          <input
            type="text"
            onChange={oncontentChangeHandler}
            value={content}
          />
        </div>
      </div>
      <button onClick={clickAddButtonHandler}>추가하기</button>
    </nav>
  );
}

export default TodoForm;
