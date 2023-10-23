import './App.css';

function App() {
  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        
      </div>
    </div>
  );
}

export default App;
