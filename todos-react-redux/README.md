# Exercice React Redux

On va déplacer le state de Todos dans le store Redux.

Dans `src/store/actions.js` prévoir 2 nouvelles actions :

- pour mettre à jour la valeur saisie dans le champs (ex: `setNewTodo`)
- pour ajouter une todos au tableau (ex: `addTodo`)

Dans `src/store/reducer.js`

- modifier `initialState` pour inclure les valeurs liées à Todos :

```js
const initialState = {
  todos: {
    items: [
    { _id: Math.random().toString(), title: 'ABC', completed: false },
    { _id: Math.random().toString(), title: 'DEF', completed: true },
  ],
    newTodo: 'XYZ'
  }
};
```

- Traiter les actions créés précédemment dans le reducer.

- Tester avec l'extension Redux DevTools que les actions suivantes fonctionnent :

```js
{
  type: 'SET_NEW_TODO', // ou autre string définie dans le fichier actions.js
  payload: 'Acheter du pain'
}

{
  type: 'ADD_TODO', // ou autre string définie dans le fichier actions.js
  payload: {
    id: 0.345634653464,
    title: 'Acheter du pain',
    completed: false,
  }
}
```

- Ecrire un ou plusieurs selecteur dans `src/store/selectors.js` pour retrouver les valeurs du state Redux.

- Dans le composant `Todos.js` remplacer les `useState` par `useSelector`
- Dans le composant `Todos.js` remplacer `setTodos` et `setNewTodo` par des appels à `dispatch` (importé avec `useDispatch`)
