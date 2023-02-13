function TodoList({ todoList, handleDelete, onEditPopup, onChangeEditTodo }) {
  return (
    <ul className="todoList">
      {todoList.map(({ id, inputValue }) => (
        <li className="todoItem">
          <span className="todoText" key={`${id}-${id}`}>
            {inputValue}
          </span>
          <button
            onClick={() => {
              onEditPopup(id);
              onChangeEditTodo(id);
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
