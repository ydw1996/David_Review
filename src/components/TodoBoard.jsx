import "./TodoBoard.css";

const TodoBoard = ({ children, todoLength }) => {
  return (
    <div className="todoBoard">
      <div className="title">DAVID Todo List</div>
      <div className="sub_title">Todos({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoBoard;
