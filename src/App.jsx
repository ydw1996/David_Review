import { useState, useRef, useCallback } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoPopup from "./components/TodoPopup";

const App = () => {
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
      text: "컴포넌트 정리, 변수 정리 📓",
      checked: true,
    },
    {
      id: 3,
      text: "캘린더 날짜 별, localstorge 적용 🔨",
      checked: true,
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

  const [selectedClassName, setSelectedClassName] = useState('');
  const handleChangeSkin = (className) => {
    setSelectedClassName(className);
  };

  return (
    <div className={`todoApp ${selectedClassName}`}>
      <TodoBoard 
      todoValue={(todoValue)}
      handleChangeSkin={handleChangeSkin}>
        <TodoList
          todoValue={todoValue}
          onCheckTodo={onCheckTodo}
          onInsertPopup={onInsertPopup}
          onChangeSeclectedTodo={onChangeSeclectedTodo}
        />
        <TodoCreate onInsertPopup={onInsertPopup}/>
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
