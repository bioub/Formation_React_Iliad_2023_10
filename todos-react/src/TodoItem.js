import TodoSpanValue from './TodoSpanValue';

import { bool, shape, string } from 'prop-types';

function TodoItem({ todo }) {
  return (
    <div className="TodoItem" data-todo-id={todo._id}>
      <input type="checkbox" className="todo-completed" checked={todo.completed} />
      <TodoSpanValue title={todo.title} />
      <button className="todo-delete-btn">-</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: shape({ _id: string, title: string, completed: bool }).isRequired,
};

export default TodoItem;
