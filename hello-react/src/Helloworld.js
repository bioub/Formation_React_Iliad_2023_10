function Helloworld() {
  const now = new Date();
  const prenom = 'Romain';

  return (
    <div className="Helloworld" id="Helloworld">
      <p>Heure : {now.toLocaleTimeString()}</p>
      <p>Prénom : {prenom}</p>
    </div>

    // Sans JSX avec l'API React.createElement (legacy)
    // React.createElement('div', { className: 'Helloworld', id: 'Helloworld' },
    //   React.createElement('p', null, 'Heure : ', now.toLocaleTimeString()),
    //   React.createElement('p', null, 'Prénom : ', prenom)
    // );
  );
}

export default Helloworld;

// En JSX
// Lorsqu'on utilise des accolades { }, on demande à afficher le résultat
// d'une expression, ex: {1 + 1} affichera 2 {"Romain".toUpperCase()} affichera ROMAIN
// si le type est string ou number le résultat s'affiche
// si le type est null, undefined ou boolean rien ne s'affiche
// si le type est string[], les éléments s'affiche (1 noeud de Text par élément)
// si le type est objet === erreur (sauf array et string qui sont des object, où React.Element)
// Objects are not valid as a React child

// Au niveau d'un composant :
// - on ne peut retourner qu'une seule valeur (techniquement n'importe expression comme ci-dessus)
// - si on retourne du JSX (donc un React.Element), il faut une balise qui englobe les autres (ici <div>)
// car on ne peut retourner qu'une seule valeur dans une fonction (éventuellement un Fragment)
// - par convention, souvent la balise racine du composant a comme classe le nom du composant
// - obligation : le composant commence par une majuscule
// - de préférence (lié à React.lazy) le composant est exporté par défaut (export default App)
// - après le return il est souvent nécessaire d'utiliser des parenthèses ()
