import { BsCheckCircle, BsCircle } from "react-icons/bs";
import "../assets/style/TodoItem.css";
import { useCallback, useState } from "react";

export default function Item({
  value,
  onCheck,
  onClick
}) {
  const { checked: _checked, text } = value
  const [checked, setState] = useState(_checked);
  const onCheckItem = useCallback(() => {
    const newValue = value
    newValue.checked = !newValue.checked
    setState(newValue.checked)
    onCheck(newValue);
  }, [value, onCheck])

  return (
    <div className="todoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BsCheckCircle
            onClick={onCheckItem}
          />
        ) : (
          <BsCircle
            onClick={onCheckItem}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onClick(value)
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
