function Helloworld() {
  function handleInput(event) {

  };

  return (
    <div className="Helloworld">
      <div>
        Name : <input onChange={handleInput} />
      </div>
      <p>
        Hello <span></span> !
      </p>
    </div>
  );
}

export default Helloworld;

// Exercice 1
// Créer une propriété name sur le state avec une valeur par défaut
// L'afficher dans la balise span
// A la saisi dans le champ (methode handleInput)
// modifier la valeur de name du state
// (pour récupérer la valeur du champ utiliser event.currentTarget.value)
// Le composant se raffraichira tout seul