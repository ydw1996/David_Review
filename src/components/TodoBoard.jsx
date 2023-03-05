import "./style/TodoBoard.css";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const TodoBoard = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const dayName = date.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <div className="todoBoard">
      <h1>{moment(date).format("YYYY년 MM월 DD일")}</h1>
      <div className="day">{dayName}</div>
      <hr />
      <div className="todoBoard_container">
        <Calendar onChange={setDate} value={date} />
        {children}
      </div>
    </div>
  );
};

export default TodoBoard;
