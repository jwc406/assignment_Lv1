function Todos({ todos, setTodos, todo }) {
  const clickDeleteButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clickDoneButtonHandler = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div className="todoBox">
      <p>{todo.title}</p>
      <p>{todo.desc}</p>
      <div className="buttons">
        <button onClick={() => clickDeleteButtonHandler(todo.id)}>
          삭제하기
        </button>
        <button onClick={() => clickDoneButtonHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todos;
