function Helloworld() {
  const now = new Date();
  const prenom = 'Romain';

  return (
    <div className="App" id="App">
      <p>Heure : {now.toLocaleTimeString()}</p>
      <p>Prénom : {prenom}</p>
    </div>

    // Sans JSX avec l'API React.createElement (legacy)
    // React.createElement('div', { className: 'App', id: 'App' },
    //   React.createElement('p', null, 'Heure : ', now.toLocaleTimeString()),
    //   React.createElement('p', null, 'Prénom : ', prenom)
    // );
  );
}

export default Helloworld;
