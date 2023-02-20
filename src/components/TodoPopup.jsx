import { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import "./TodoPopup.css";

const TodoPopup = ({
  onInsertPopup,
  onInsertTodo,
  selectedTodo,
  onRemoveTodo,
  onEditTodo,
}) => {
  const [addValue, setAddValue] = useState("");

  const onChange = (e) => {
    setAddValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(addValue);
    setAddValue("");
    onInsertPopup();
  };

  useEffect(() => {
    if (selectedTodo) {
      setAddValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="todoPopup_bg" onClick={onInsertPopup}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onEditTodo(selectedTodo.id, addValue);
              }
            : onSubmit
        }
      >
        <input
          placeholder="할일을 써주세요 :)"
          value={addValue}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="todoSelect">
            <TiPencil
              onClick={() => {
                onEditTodo(selectedTodo.id, addValue);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemoveTodo(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoPopup;
