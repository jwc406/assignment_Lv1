import React, { useState } from "react";
import "./App.css";

import Header from "./component/header";

function App() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTodoTitle(newTitle);
  };

  const onTextChangeHandler = (event) => {
    const newText = event.target.value;
    setTodoText(newText);
  };

  const onAddButtonHandler = () => {};

  return (
    <div>
      <Header />
      <nav>
        <div className="inputBox">
          <div>
            <span>제목</span>
            <input
              type="text"
              onChange={onTitleChangeHandler}
              value={todoTitle}
            />
          </div>
          <div>
            <span>내용</span>
            <input
              type="text"
              onChange={onTextChangeHandler}
              value={todoText}
            />
          </div>
        </div>
        <button onClick={onAddButtonHandler}>추가하기</button>
      </nav>
      <main>
        <p>하는 중 🔥</p>
        <div className="workingPlace">
          <div className="todoBox"></div>
        </div>
        <p>완료 ✅</p>
        <div className="donePlace"></div>
      </main>
    </div>
  );
}

export default App;
