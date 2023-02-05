import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, seteditId] = useState(0);

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
      seteditId(0);
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
    seteditId(id);
  };

  return (
    <div className="todoApp">
      <div className="todoBoard">
        <h1>DW Todo List</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button> {editId ? "Edit" : "GO"} </button>
        </form>
        <ul className="todoList">
          {todoList.map((todoItem) => (
            <li className="todoItem">
              <span
                className="todoText"
                key={`${inputValue}-${Date.now()}-${todoItem.id}`}
              >
                {todoItem.inputValue}
              </span>
              <button onClick={() => handleEdit(todoItem.id)}>Edit</button>
              <button onClick={() => handleDelete(todoItem.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
