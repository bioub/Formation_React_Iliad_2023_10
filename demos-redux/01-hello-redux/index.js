import { legacy_createStore } from 'redux';

const initialState = {
  name: 'Romain',
  likes: 10,
};

// const nextState = reducer(state, action);
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        likes: state.likes + 1,
      };
    case 'UPDATE_NAME': 
      return {
        ...state,
        name: action.newName,
      };
      default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log('initial state', store.getState());

// el.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('current state', store.getState());
});

// el.dispatchEvent(new MouseEvent('click'))
store.dispatch({ type: 'INCREMENT_LIKES' });
store.dispatch({ type: 'UPDATE_NAME', newName: 'Toto' });
