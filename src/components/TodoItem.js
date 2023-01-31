import React from "react"

function TodoItem(todos) {

    return(
        <ul className="todo-list">
            <li className="todo-item">
                <span className="todo-text">{todos.item}</span>
                <button>Edit</button>
                <button>Delete</button>
            </li>
        </ul>        
    )
}

export default TodoItem