import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editPopup, setEditPopup] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue !== "") {
      setTodoList([
        { id: `${inputValue}-${Date.now()}`, inputValue },
        ...todoList,
      ]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList([...delTodo]);
  };

  const onEditPopup = () => {
    setEditPopup((prev) => !prev);
  };

  const onChangeEditTodo = (id) => {
    setEditTodo(id);
  };

  return (
    <div className="todoApp">
      <div className="todoBoard">
        <h1>DW Todo List</h1>
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <TodoList
          todoList={todoList}
          handleDelete={handleDelete}
          editPopup={editPopup}
          onEditPopup={onEditPopup}
          onChangeEditTodo={onChangeEditTodo}
        />
        {editPopup && (
          <TodoEdit todoList={todoList} onEditPopup={onEditPopup} />
        )}
      </div>
    </div>
  );
};

export default App;
