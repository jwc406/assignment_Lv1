import React, { useState } from "react";
import "./App.css";

import Header from "./component/header";
import TodoForm from "./component/TodoForm";
import RenderTodos from "./component/RenderTodos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      isDone: false,
      title: "리액트 공부하기",
      content: "리액트 기초 강의 듣기",
    },
    {
      id: 2,
      isDone: true,
      title: "TIL 작성하기",
      content: "오늘 한 것 정리해보기",
    },
  ]);

  return (
    <div>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <RenderTodos todos={todos} setTodos={setTodos} isDone={false} />
      <RenderTodos todos={todos} setTodos={setTodos} isDone={true} />
    </div>
  );
}

export default App;
