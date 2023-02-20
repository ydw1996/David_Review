import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoPopup.css";

const TodoPopup = ({ onAddPopup, onAddTodo }) => {
  const [addValue, setAddValue] = useState("");

  const onChange = (e) => {
    setAddValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(addValue);
    setAddValue("");
    onAddPopup();
  };

  return (
    <div>
      <div className="todoPopup_bg" onClick={onAddPopup}></div>
      <form onSubmit={onSubmit}>
        <input placeholder="please type" value={addValue} onChange={onChange}></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoPopup;
