import { useMemo, useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import CalendarMock from '../store/CalendarMock'
import Floating from "../components/Floating";
import List from "../components/List";
import Popup from "../components/Popup";
import "react-calendar/dist/Calendar.css";
import "../assets/style/Calendar.css";
import "../assets/style/TodoBoard.css";

const mock = CalendarMock.getInstance()
const MainBoard = ({ children, handleChangeSkin }) => {
  const [date, setDate] = useState(new Date());
  const dayName = date.toLocaleString("ko-KR", { weekday: "long" });
  const [data, setData] = useState(mock.get(CalendarMock.generateKey(date)))
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState(null)

  const key = useMemo(() => {
    return CalendarMock.generateKey(date)
  }, [date])

  useEffect(() => {
    const data = mock.get(key)
    setData(data)
  }, [key])

  useEffect(() => {
    mock.put(key, data)
    console.log('data~~', data)
  }, [data])
  
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
        <Calendar
          value={date} 
          onChange={(d) => {
            setDate(d)
          }}
        />
        <List
          todoValue={data}
          onChange={(value, idx) => {
            const newData = data
            newData[idx] = value
            setData(data)
          }}
          onClick={(value, idx) => {
            setVisible(!visible)
            setItem(value)
          }}
        />
        <Popup
          visible={visible}
          item={item}
          onSubmit={(item) => {
            const newData = data
            const newItem = item
            if(item.id == null) {
              newItem.id = newData.length + 1
              setData([...newData, newItem])
            } else if(item.id) {
              const idx = newData.findIndex(x => x.id === item.id)
              newData[idx] = newItem
              setData([...newData])
            } else if(item.id < 0) {
              const idx = newData.findIndex(x => x.id === item.id)
              if(idx > -1) {
                newData.splice(idx, 1)
              }
              setData([...newData])
            }
            setVisible(false)
          }}
        />
        <Floating onClick={() => {
          setItem({})
          setVisible(true)
        }}/>
      </div>
    </div>
  );
};

export default MainBoard;
