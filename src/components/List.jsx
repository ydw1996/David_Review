import Item from "./Item";
import "../assets/style/TodoList.css";

export default function List({
  todoValue,
  onChange,
  onClick
}) {
  return (
    <div className="todoList">
      {todoValue.map((todo, idx) => (
        <Item
          key={idx}
          value={todo}
          onCheck={(d) => {
            onChange(d, idx)
          }}
          onClick={(d) => {
            onClick(d)
          }}
        />
      ))}
    </div>
  );
};