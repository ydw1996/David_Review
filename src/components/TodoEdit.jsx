import { useEffect, useState } from "react";
import "./TodoPopup.css";

const TodoEdit = ({ onEditPopup, todoList }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.vlaue);
  };

  useEffect(() => {
    if ({ todoList }) {
      setValue(todoList);
      console.log(todoList);
    }
  }, [todoList]);

  return (
    <div className="background" onClick={onEditPopup}>
      <form className="editForm">
        <input value={value} onChange={onChange}></input>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default TodoEdit;
