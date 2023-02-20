import { useState, useRef, useCallback } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";

const App = () => {
  const [selectedTodo, setSecletedTodo] = useState(null);
  const [addPopup, setAddPopup] = useState(false);
  const [todoValue, setTodoValue] = useState([
    {
      id: 1,
      text: "용현씨와 헬스하기 💪",
      checked: true,
    },
    {
      id: 2,
      text: "혜린씨의 철학듣기 📓",
      checked: true,
    },
    {
      id: 3,
      text: "소정씨와 마늘먹기 🧄",
      checked: true,
    },
    {
      id: 4,
      text: "천규씨에게 Fact폭받기 🥊",
      checked: false,
    },
  ]);

  const onInsertPopup = () => {
    if (selectedTodo) {
      setSecletedTodo(null);
    }
    setAddPopup((prev) => !prev);
  };

  const nextId = useRef(5);
  const onInsertTodo = useCallback(
    (text) => {
      if (text === "") {
        return alert("할 일을 입력해주세요");
      }
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodoValue(todoValue.concat(todo));
      nextId.current++;
    },
    [todoValue]
  );

  const onCheckTodo = (id) => {
    setTodoValue((todoValue) =>
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSeclectedTodo = (todo) => {
    setSecletedTodo(todo);
  };

  const onRemoveTodo = (id) => {
    onInsertPopup();
    setTodoValue((todoValue) => todoValue.filter((todo) => todo.id !== id));
  };

  const onEditTodo = (id, text) => {
    onInsertPopup();
    setTodoValue((todoValue) =>
      todoValue.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="todoApp">
      <TodoBoard todoLength={todoValue.length}>
        {" "}
        <TodoList
          todoValue={todoValue}
          onCheckTodo={onCheckTodo}
          onInsertPopup={onInsertPopup}
          onChangeSeclectedTodo={onChangeSeclectedTodo}
        />
        <div className="todoAdd" onClick={onInsertPopup}>
          <BsFillPlusCircleFill />
        </div>
        {addPopup && (
          <TodoPopup
            selectedTodo={selectedTodo}
            onInsertPopup={onInsertPopup}
            onInsertTodo={onInsertTodo}
            onRemoveTodo={onRemoveTodo}
            onEditTodo={onEditTodo}
          />
        )}
      </TodoBoard>
    </div>
  );
};

export default App;
