import Todo from "./Todo";

function RenderTodos({ todos, setTodos, isDone }) {
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  function renderTodoList(filteredTodos) {
    if (filteredTodos.length > 0) {
      return filteredTodos.map((todo) => (
        <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
      ));
    } else {
      return <p>할 일이 없습니다 🥲</p>;
    }
  }

  return (
    <main>
      <p>{isDone ? "완료 ✅" : "하는 중 🔥"}</p>
      <div>{renderTodoList(filteredTodos)}</div>
    </main>
  );
}

export default RenderTodos;
