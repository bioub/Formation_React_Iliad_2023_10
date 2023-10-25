import { useState } from "react";
import Helloworld from "./helloworld";
import MultiStateButton from "./multi-state-button";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Toto');

  function handleSelected(val) {
    setName(val);
  }

  return (
    <div className="Exercices">
      <Helloworld name={name} onNameChange={handleSelected} />
      <MultiStateButton items={names} selected={name} onSelected={handleSelected} />
      <p>Selected name : {name}</p>
    </div>
  );
}

export default Exercices;