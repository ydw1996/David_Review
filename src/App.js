import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue,setInputValue] = useState('')
  const [todoList,setTodoList] = useState([])
  const addItem =() => {
    console.log("im dw", inputValue)
    setTodoList([...todoList,inputValue])
  }
  return (
    <div className="App">
      <div className="container">
        <h1>David Todo List</h1>
        <div className="todo-form">
          <input value ={inputValue}type="text" onChange={(event)=>setInputValue(event.target.value)}/>
          <button onClick={addItem}>추가</button>
        </div>
        <TodoBoard todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;
