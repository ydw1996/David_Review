function TodoList({ todoList, handleDelete, handleEdit }) {
  return (
    <ul className="todoList">
      {todoList.map(({ id, inputValue }) => (
        <li className="todoItem">
          <span className="todoText" key={`${inputValue}-${Date.now()}-${id}`}>
            {inputValue}
          </span>
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
