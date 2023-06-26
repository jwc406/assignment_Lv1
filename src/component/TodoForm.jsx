import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const onDescChangeHandler = (event) => {
    const newDesc = event.target.value;
    setDesc(newDesc);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      title,
      desc,
    };
    if (title === "" || desc === "") alert("모두 입력하세요!");
    else {
      setTodos([...todos, newTodo]);
      setTitle("");
      setDesc("");
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
          <input type="text" onChange={onDescChangeHandler} value={desc} />
        </div>
      </div>
      <button onClick={clickAddButtonHandler}>추가하기</button>
    </nav>
  );
}

export default TodoForm;
