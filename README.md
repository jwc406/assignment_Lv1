# 주특기주차 Level 1 과제

## 컴포넌트 설명

### 1. App.jsx

- 메인 컴포넌트
- state로 투두 객체를 저장했고, 초기값을 두 개 넣어주었습니다.
- return문을 통해 페이지의 헤더를 담당하는 Header.tsx, 투두를 입력받고 투두리스트에 추가해주는 TodoForm.tsx, 투두리스트를 진행중/완료로 나누어 출력해주는 RenderTodos.tsx를 렌더링합니다.
- TodoForm.tsx의 props로 todos와 setTodos를 전달합니다.
- RenderTodos.tsx의 props로 todos와 setTodos, 진행중/완료를 구분할 때 사용할 isDone을 전달합니다.

### 2. Header.jsx

- 헤더를 구성하는 제목과 React를 렌더링하는 컴포넌트입니다.

### 3. TodoForm.jsx

- 투두를 입력받는 input과 버튼을 렌더링하고, input으로 받아온 값을 투두리스트에 추가해주는 역할을 하는 컴포넌트입니다.

### 4. RenderTodos.jsx

- 투두리스트를 진행중/완료로 나누어주고, 이에 따라 생성된 새로운 todos를 Todos.tsx를 통해 출력해주는 역할을 합니다.
- props로 받은 todos를 filter 메서드를 통해 순회하면서 props로 넘겨받은 isDone과 각각 투두의 isDone 을 바교하여 true인 todo와 false인 todo들만을 가진 새로운 배열을 생성합니다.
- return문을 통해 isDone 값으로 진행중/완료 문구를 출력해주고, 새로 만들어진 배열의 길이가 0보다 크면 map 메서드를 통해 하나씩 순회하면서 Todos.tsx를 렌더링합니다.
- Todos.tsx의 props로 todos, setTodos, 각 todo, key값인 todo.id를 전달합니다.

### 5. Todo.tsx

- RenderTodos의 자식 컴포넌트로, RenderTodos로 걸러진 투두를 하나씩 렌더링해주고, 삭제와 진행중/완료 작업을 하는 컴포넌트입니다.
- 삭제하기 버튼의 onClick을 통해 현재 투두의 id를 인자로 넘겨주고, 삭제 함수에서 filter를 통해 현재 id와 인자의 id가 같지 않은 todo들을 새로운 배열에 저장해준 후 setTodos로 상태를 변경해줍니다.
- 완료/취소 버튼의 onClick을 통해 현재 투두의 id를 인자로 넘겨주고, 완료 함수에서 map을 통해 현재 id와 인자의 id가 같은 경우 현재 투두를 복사하여 isDone값을 반대로 바꿔준 배열을 생성합니다. 이를 setTodos로 상태를 변경해줍니다.
