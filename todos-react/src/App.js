import './App.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem todo={{_id: 'abcdef1234', title: 'ABC', completed: true }} />
        <TodoItem todo={{_id: 'fghf35353s', title: 'DEF', completed: false }} />
        <TodoItem todo={{_id: 'luplkupu23', title: 'XYC', completed: true }} />
      </div>
    </div>
  );
}

export default App;
