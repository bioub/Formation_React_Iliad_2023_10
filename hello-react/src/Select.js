import { useState } from 'react';

function Select() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Code conditionnel v1
  // let menuEl = undefined;
  // if (menuOpen) {
  //   menuEl = (
  //     <div className="menu">
  //       <div className="item">Toto</div>
  //       <div className="item">Titi</div>
  //       <div className="item">Tata</div>
  //     </div>
  //   );
  // }

  // Code conditionnel v2 (plutot si if else )
  // const menuEl = menuOpen ? (
  //   <div className="menu">
  //     <div className="item">Toto</div>
  //     <div className="item">Titi</div>
  //     <div className="item">Tata</div>
  //   </div>
  // ) : undefined;

  // Code conditionnel v3 (plutot si if seul)
  // const menuEl = menuOpen && (
  //   <div className="menu">
  //     <div className="item">Toto</div>
  //     <div className="item">Titi</div>
  //     <div className="item">Tata</div>
  //   </div>
  // );

  // Boucle JSX v1
  // const names = ['Toto', 'Titi', 'Tata'];
  // const itemEls = [];

  // for (const name of names) {
  //   itemEls.push(<div className="item" key={name}>{name}</div>);
  // }

  // Boucle JSX v2
  const names = ['Toto', 'Titi', 'Tata'];
  const itemEls = names.map((el) => <div className="item" key={el}>{el}</div>)


  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="Select" onClick={handleClick}>
      <div className="value">Titi</div>
      {/* {menuOpen} */}
      {menuOpen && (
        <div className="menu">
          {itemEls}
        </div>
      )}
    </div>
  );
}

export default Select;
