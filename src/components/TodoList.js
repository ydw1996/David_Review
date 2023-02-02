import React from "react"
import TodoItem from "./TodoItem"

function TodoList(todos){

    return (
        <div>
            {todos.todoList.map((item)=><TodoItem key={item}/>)}
        </div>
    )
}

export default TodoList