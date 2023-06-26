function Todos(props) {
  const clickDeleteButtonHandler = (id) => {
    const newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(newTodos);
  };

  const clickDoneButtonHandler = (id) => {
    const updateTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    props.setTodos(updateTodos);
  };

  return (
    <div className="todoBox">
      <p>{props.todo.title}</p>
      <p>{props.todo.desc}</p>
      <div className="buttons">
        <button onClick={() => clickDeleteButtonHandler(props.todo.id)}>
          삭제하기
        </button>
        <button onClick={() => clickDoneButtonHandler(props.todo.id)}>
          {props.todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todos;
