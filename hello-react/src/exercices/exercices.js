import { useState } from "react";
import Helloworld from "./helloworld";
import MultiStateButton from "./multi-state-button";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Toto');

  function handleSelected(val) {

  }

  return (
    <div className="Exercices">
      <Helloworld />
      <MultiStateButton items={names} />
    </div>
  );
}

export default Exercices;