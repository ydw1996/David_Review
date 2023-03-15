import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Floating({ onClick }) {
  return (
    <div className="todoAdd" onClick={(e) => onClick(e)}>
        <BsFillPlusCircleFill />
    </div>
  )
}