import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";

const nextId = 4;

const App = () => {
  const [addPopup, setAddPopup] = useState(false);
  const [inputValue, setInputValue] = useState([
    {
      id: 1,
      text: "Todo 1",
      checked: true,
    },
    {
      id: 2,
      text: "Todo 2",
      checked: false,
    },
    {
      id: 3,
      text: "Todo 3",
      checked: true,
    },
  ]);

  const onAddPopup = () => {
    setAddPopup((prev) => !prev);
  };

  const onAddTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setInputValue((inputValue) => inputValue.concat(todo));
      nextId++;
    }
  };

  const onCheckTodo = (id) => {
    setInputValue((inputValue) =>
      inputValue.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="todoApp">
      <TodoBoard todoLength={inputValue.length}>
        <TodoList inputValue={inputValue} onCheckTodo={onCheckTodo} />
        <div className="todoAdd" onClick={onAddPopup}>
          <BsFillPlusCircleFill />
        </div>
        {addPopup && (
          <TodoPopup onAddPopup={onAddPopup} onAddTodo={onAddTodo} />
        )}
      </TodoBoard>
    </div>
  );
};

export default App;
