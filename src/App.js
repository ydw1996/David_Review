import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState('')
  const [todoList, setTodoList] = useState([])
  const addTodos = (todoEvent) => {
    setTodos(todoEvent.target.value)
    todoEvent()
  }
  const addItem = (addEvent) => {
    console.log("I have to do is", todos)
    setTodoList([...todoList, todos])
    addEvent()
  }
    
  return (
    <div className="Todos">
      <div className="todo-box ">
        <h1>David Todo List</h1>
        <div className="todo-form">
          <input type="text" value ={todos} onChange={addTodos}/>
          <button onClick={addItem}>추가</button>
        </div>
        <TodoList todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;
