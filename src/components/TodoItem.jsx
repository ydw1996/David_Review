import { BsCheckCircle, BsCircle } from "react-icons/bs";
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckTodo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="todoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BsCheckCircle
            onClick={() => {
              onCheckTodo(id);
            }}
          />
        ) : (
          <BsCircle
            onClick={() => {
              onCheckTodo(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
