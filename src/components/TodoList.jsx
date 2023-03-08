import TodoItem from "./TodoItem";
import "../assets/style/TodoList.css";

const TodoList = ({
  todoValue,
  onCheckTodo,
  onInsertPopup,
  onChangeSeclectedTodo,
}) => {
  return (
    <div className="todoList">
      {todoValue.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckTodo={onCheckTodo}
          onInsertPopup={onInsertPopup}
          onChangeSeclectedTodo={onChangeSeclectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
