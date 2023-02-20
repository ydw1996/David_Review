import "./TodoBoard.css";

const TodoBoard = ({ children, todoLength }) => {
  return (
    <div className="todoBoard">
      <div className="title">DW Todo List ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoBoard;
