import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import Hello from './Hello';
import Helloworld from './Helloworld';
import LikeButton from './LikeButton';
import LikeButtonControlled from './LikeButtonControlled';
import Pokemon from './Pokemon';
import Select from './Select';
import UserForm from './UserForm';
import Exercices from './exercices/exercices';

function App() {
  const [likesInApp, setLikesInApp] = useState(10);

  const contact = {
    name: 'Romain',
    age: 38,
    isActive: true,
  }

  function handleIncrement(newLikesValue) {
    setLikesInApp(newLikesValue);
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
      <Exercices />

      <h2>Select (conditional rendering, loops, style)</h2>
      <Select />

      <h2>LikeButtonControlled (communication entre plusieurs composants via les props,
        Lifting state up (remonte le state), Composants contrôllés)
      </h2>
      <LikeButtonControlled likes={likesInApp} onIncrement={handleIncrement} />
      <LikeButtonControlled likes={likesInApp} onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
