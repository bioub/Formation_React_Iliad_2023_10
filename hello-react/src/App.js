import './App.css';
import Clock from './Clock';
import Hello from './Hello';
import Helloworld from './Helloworld';
import LikeButton from './LikeButton';
import Pokemon from './Pokemon';
import UserForm from './UserForm';

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

      <h2>Clock, Pokemon (State, Effet/Lifecycle)</h2>
      <Clock />
      <Pokemon />

      <h2>LikeButton, UserForm (Events)</h2>
      <LikeButton />
      <LikeButton />
      <UserForm />
    </div>
  );
}

export default App;
