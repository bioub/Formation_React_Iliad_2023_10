import TodoSpanValue from "./TodoSpanValue";

function TodoItem() {
  return (
    <div className="TodoItem" data-todo-id="1234">
      <input type="checkbox" className="todo-completed" checked={true} />
      <TodoSpanValue />
      <button className="todo-delete-btn">-</button>
    </div>
  );
}

export default TodoItem;
