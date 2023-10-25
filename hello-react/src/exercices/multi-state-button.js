import { useState } from "react";

function MultiStateButton({ items }) {
  const [selected, setSelected] = useState(items[0]);

  if (!items || !items.length) {
    throw new Error('items must not be empty');
  }

  function handleClick() {
    const currentIndex = items.indexOf(selected);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelected(items[nextIndex]);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButton;

// Exercice 2
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau reçu en props
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin

// Exercice 3 : récupérer la valeur sélectionnée (selected) au 
// niveau du composant parent (Exercices) et la stocker dans le state name
// (puis l'afficher quelque part dans Exercices)

// Exercice 4 : transformer Helloworld en un composant controllé comme LikeButtonControlled par rapport à LikeButton
// (remonter le state name au niveau du parent Exercice (Lifting state up))

// BONUS : implémenter le click du bouton moins dans TodoItem