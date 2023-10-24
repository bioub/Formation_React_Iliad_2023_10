import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <div className="Pokemon">
      <p>
        Name: {pokemon?.name}
      </p>
      <img src={pokemon?.sprites?.front_default} alt="Pokemon" />
    </div>
  );
}

export default Pokemon;
