import { useState, useRef, useCallback } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Calendar from "react-calendar";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./components/style/Calendar.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";

const App = () => {
  const [date, setDate] = useState(new Date());
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
      text: "달력 기능 넣어 페이지 추가 🔨",
      checked: true,
    },
    {
      id: 4,
      text: "리스트 hover 편집,삭제 Icon노출 🎯",
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
        <Calendar onChange={setDate} value={date} />{" "}
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
