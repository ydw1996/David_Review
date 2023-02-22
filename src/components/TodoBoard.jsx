import "./style/TodoBoard.css";

const TodoBoard = ({ children }) => {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <div className="todoBoard">
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default TodoBoard;
