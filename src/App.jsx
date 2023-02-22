import { useState, useRef, useCallback } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";

const App = () => {
  let [btnActive, setBtnActive] = useState("");
  const [selectedTodo, setSecletedTodo] = useState(null);
  const [addPopup, setAddPopup] = useState(false);
  const [todoValue, setTodoValue] = useState([
    {
      id: 1,
      text: "Todo리스트 날짜, 요일 적용 💪",
      checked: true,
    },
    {
      id: 2,
      text: "레이아웃 정리, 폰트적용 📓",
      checked: true,
    },
    {
      id: 3,
      text: "리스트 hover 편집,삭제 Icon노출 🎯",
      checked: false,
    },
    {
      id: 4,
      text: "달력 기능 넣어 페이지 추가 🔨",
      checked: false,
    },
    {
      id: 5,
      text: "설정 추가 > Todo리스트 커스텀 🎨",
      checked: false,
    },
    {
      id: 6,
      text: "React활용하여 새로운 기능 추가 🎉",
      checked: false,
    },
  ]);

  const onInsertPopup = () => {
    if (selectedTodo) {
      setSecletedTodo(null);
    }
    setAddPopup((prev) => !prev);
  };

  const nextId = useRef(7);
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
      <TodoBoard todoValue={todoValue}>
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
