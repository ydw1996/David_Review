import React from "react"

function TodoItem(props) {

    return(
        <ul className="todo-list">
            <li className="todo-item">
                <span className="todo-text">{props.item}</span>
                <button>Edit</button>
                <button>Delete</button>
            </li>
        </ul>        
    )
}
export default TodoItem