import Todos from "./Todos";

function RenderTodos({ todos, setTodos, isDone }) {
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <main>
      <p>{isDone ? "완료 ✅" : "하는 중 🔥"}</p>
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todos
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <p>할 일이 없습니다 🥲</p>
        )}
      </div>
    </main>
  );
}

export default RenderTodos;
