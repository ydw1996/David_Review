import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../assets/style/Calendar.css";
import "../assets/style/TodoBoard.css";

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
          <button className="todo_skinBtn skin_Bu" onClick={() => handleChangeSkin('bg_blue')}></button>
          <button className="todo_skinBtn skin_Bk" onClick={() => handleChangeSkin('bg_black')}></button>
          <button className="todo_skinBtn skin_Wh" onClick={() => handleChangeSkin('bg_white')}></button>
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
