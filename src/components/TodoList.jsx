import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ inputValue, onCheckTodo }) => {
  return (
    <div className="todoList">
      {inputValue.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onCheckTodo={onCheckTodo} />
      ))}
    </div>
  );
};

export default TodoList;
