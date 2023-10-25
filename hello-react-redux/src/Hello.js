// /**
//  * Hello component
//  * Use this to illustrate props
//  * @param {object} props Component props
//  * @param {string} props.name The name of the contact
//  * @param {number} props.age The age of the contact
//  * @param {boolean} props.isActive Either the contact is active or not
//  * @returns {import('react').ReactNode}
//  */
// function Hello(props) {
//   return (
//     <div className="Hello">
//       Hello {props.name}
//     </div>
//   );
// }

import { string, number, bool } from 'prop-types';

function Hello({ name, age, isActive = false }) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age} {isActive ? '(active)' : '(not active)'}
    </div>
  );
}

Hello.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
  isActive: bool,
};

Hello.defaultProps = {
  isActive: false,
};

export default Hello;

// Destructurer un objet en JS

// Sans destructurer
// const coords = { x: 1, y: 2 };
// const x = coords.x;
// const y = coords.y;
// const z = coords.z ?? 0;

// En destructurant (depuis ES2015)
// const coords = { x: 1, y: 2 };
// const { x, y, z = 0 } = coords;


// En un code proche de React

// Sans destructurer
// const props = {
//   name: 'Romain',
//   age: 38,
//   isActive: true,
// };
// const name = props.name;
// const age = props.age;
// const isActive = props.isActive ?? false;

// En destructurant (depuis ES2015)
// const props = {
//   name: 'Romain',
//   age: 38,
//   isActive: true,
// };
// const { name, age, isActive = false } = props;