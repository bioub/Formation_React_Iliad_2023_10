import './App.css';
import Hello from './Hello';
import Helloworld from './Helloworld';

function App() {

  const contact = {
    name: 'Romain',
    age: 38,
    isActive: true,
  }

  return (
    <div className="App">
      <h2>Helloworld (Component, JSX, render, VirtualDOM)</h2>
      <Helloworld />

      <h2>Hello (Props)</h2>
      <Hello name="Romain" age={38} isActive />
      <Hello name={contact.name} age={contact.age} isActive={contact.isActive} />
      <Hello {...contact} />
      {/* React.createElement('h2', null, 'Hello (Props)') */}
      {/* React.createElement(Hello, { name: 'Romain', age: 38, isActive: true }) */}
      {/* React.createElement(Hello, contact) */}
    </div>
  );
}

export default App;
