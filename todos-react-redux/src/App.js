import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from './store/selectors';
import { addTodo, setNewTodo } from './store/actions';

function App() {
  // const [newTodo, setNewTodo] = useState('XYZ');
  // const [todos, setTodos] = useState([
  //   { _id: Math.random().toString(), title: 'ABC', completed: true },
  //   { _id: Math.random().toString(), title: 'DEF', completed: false },
  //   { _id: Math.random().toString(), title: 'HIJ', completed: true },
  // ]);
  const { newTodo, items } = useSelector(todosSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTodos(data);
  //     });
  // }, []);

  function handleChange(event) {
    dispatch(setNewTodo(event.target.value));
  } 

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo({ _id: Math.random().toString(), title: newTodo, completed: false }))
  }

  return (
    <div className="App">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" value={newTodo} onChange={handleChange} className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        {items.map((todo) => <TodoItem todo={todo} key={todo._id} />)}
      </div>
    </div>
  );
}

export default App;
