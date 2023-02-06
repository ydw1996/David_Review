import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todoList.find((todoItem) => todoItem.id === editId);
      const updatedTodo = todoList.map((todoItem) =>
        todoItem.id === editTodo.id
          ? (todoItem = { id: todoItem.id, inputValue })
          : { id: todoItem.id, inputValue: todoItem.inputValue }
      );
      setTodoList(updatedTodo);
      setEditId(0);
      setInputValue("");
      return;
    }

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

  const handleEdit = (id) => {
    const editTodo = todoList.find((todoItem) => todoItem.id === id);
    setInputValue(editTodo.inputValue);
    setEditId(id);
  };

  return (
    <div className="todoApp">
      <div className="todoBoard">
        <h1>DW Todo List</h1>
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          editId={editId}
        />
        <TodoList
          todoList={todoList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
