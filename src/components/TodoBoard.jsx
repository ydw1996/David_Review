import "../assets/style/TodoBoard.css";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const TodoBoard = ({ children, handleChangeSkin }) => {
  const [date, setDate] = useState(new Date());
  const dayName = date.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <div className="todoBoard">
      <div className="todoBoard_header">
        <div className="todo_date">
          <h1>{moment(date).format("YYYY년 MM월 DD일")}</h1>
          <div className="day">{dayName}</div>
        </div>
        <div className="todo_setting">
          <button onClick={() => handleChangeSkin('bg_blue')}>Button 1</button>
          <button onClick={() => handleChangeSkin('bg_black')}>Button 2</button>
          <button onClick={() => handleChangeSkin('bg_white')}>Button 3</button>
        </div>
      </div>
      <hr />
      <div className="todoBoard_container">
        <Calendar onChange={setDate} value={date} />
        {children}
      </div>
    </div>
  );
};

export default TodoBoard;
