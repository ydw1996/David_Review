function TodoForm({ inputValue, handleSubmit, editId, setInputValue }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button> {editId ? "Edit" : "GO"} </button>
    </form>
  );
}

export default TodoForm;
