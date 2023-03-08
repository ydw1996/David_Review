import { BsFillPlusCircleFill } from "react-icons/bs";

function TodoCreate({onInsertPopup}) {
  return (
    <div className="todoAdd" onClick={onInsertPopup}>
        <BsFillPlusCircleFill />
    </div>
  )
}

export default TodoCreate