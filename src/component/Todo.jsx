function Todo({ todos, setTodos, todo }) {
  const clickDeleteButtonHandler = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const clickDoneButtonHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todoBox">
      <p>{todo.title}</p>
      <p>{todo.content}</p>
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

export default Todo;
