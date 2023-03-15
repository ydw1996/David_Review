import { useState, useEffect, Fragment, useCallback } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import "../assets/style/TodoPopup.css";

export default function Popup ({
  visible,
  item,
  onSubmit,
}) {
  const {
    id = null,
    text = '',
    checked = false
  } = item || {}
  const [todoText, setTodoText] = useState(text);

  useEffect(() => {
    if (text) {
      setTodoText(text);
    } else {
      setTodoText('');
    }
  }, [text]);
  
  const onChange = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  return (
    <Fragment>
      {
        visible ?
        <div>
          <div className="todoPopup_bg"></div>
          <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit({ text: todoText, checked, id })
            setTodoText('');
          }}>
            <input
              placeholder="할일을 써주세요 :)"
              value={todoText}
              onChange={onChange}
            />
            {text != '' ? (
              <div className="todoSelect">
                <button type="submit">
                  <TiPencil />
                </button>
                <button type="submit">
                  <TiTrash />
                </button>
              </div>
            ) : (
              <button type="submit">
                <MdAddCircle />
              </button>
            )}
          </form>
        </div>
        :
        ''
      }
    </Fragment>
  );
};
