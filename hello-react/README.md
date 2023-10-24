# Exercices

## JSX

Reprendre le HTML suivant du projet Todos et le transformer en JSX dans App :

```
<form class="todos-form">
  <input type="checkbox" class="todos-toggle-checked" />
  <input type="text" class="todos-new-input" />
  <button>+</button>
</form>
<div class="todos-container"></div>
```

Créer ensuite 3 composants `TodoItem` (remplace `createTodo`), `TodoSpanValue` (remplace `createSpanValue`) et `TodoInputValue` (remplace `createInputValue`) dans `TodoItem.js`, `TodoSpanValue.js` et `TodoInputValue.js` qui traduit le code suivant en JSX :

```
export function createTodo(todo) {
  const rowEl = document.createElement('div');
  rowEl.className = 'todo-item';
  rowEl.dataset.todoId = todo._id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed ?? false;

  const spanEl = createSpanValue(todo.title);

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todo-delete-btn';
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue(val) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todo-span-value';
  spanEl.innerText = val;
  return spanEl;
}

export function createInputValue(val) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todo-input-value';
  inputEl.value = val;
  return inputEl;
}
```

Les innerText sont à remplacer en écrivant au milieu d'une balise JSX
ex: `<button>-</button>`

`rowEl.dataset.todoId` s'écrit comme en HTML : `<div data-todo-id="">`

Les composants n'ont pour l'instant pas de paramètres

A la place, remplacer par des valeurs fixes :
- todo.completed par false
- todo.title par 'ABC'
- todo._id = '1234'

En JSX, on passe une expression autre qu'un constante de type string comme ceci :

```
<input type="text" checked={true}>
<div>{todo.title}</div>
<input type="text" checked={todo.completed}>
```

Enfin utiliser `TodoItem` 3 fois dans `App`

```
<div class="todos-container">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
```

## Props

Déclarer une prop todo dans `TodoItem`.

Cette prop doit être un objet avec 3 clés :
- `_id` de type `string`
- `title` de type `string`
- `completed` de type `boolean`

Dans `App` passer ensuite un objet d'exemple différent à chaque `<TodoItem />` par exemple :

```
{ _id: 'abcdef1234', title: 'ABC', completed: false }
```

Modifier le code de `TodoItem` de façon à :
- affecter `_id` à `data-todo-id`
- affecter `completed` à la propriété `checked` de la checkbox
- passer `title` en prop de `<TodoSpanValue />`

Déclarer ensuite la prop `title` dans `TodoSpanValue` et l'afficher dans la balise `<span>`

Installer ensuite `prop-types` et valider les props de `TodoItem` et `TodoSpanValue` (toutes les props sont obligatoires, choisir les bons types).

Bonus : au lieu de `prop-types` utiliser `TypeScript` pour typer les props (nécessite de créer un nouveau projet).

## State + Loops

Dans `App` créer 2 states :
- `newTodo` avec comme valeur initiale `'XYZ'`
- `todos` avec comme valeur initiale :

```
[
  _id: Math.random().toString(), title: 'ABC', completed: true,
  _id: Math.random().toString(), title: 'DEF', completed: false,
  _id: Math.random().toString(), title: 'HIJ', completed: true,
]
```

Afficher `newTodo` dans l'élement `<input />` du formulaire et mettre à jour `newTodo`
lorsque la valeur change (comme dans l'exercice `Helloworld`)

Dans `<div className="todos-container">` remplacer les 3 `<TodoItem />` par une boucle sur le tableau `todos` qui les transforme en `<TodoItem />`.

Ecouter ensuite l'événement `submit` du formulaire et désactiver le avec `event.preventDefault()`, dans le callback `handleSubmit` ajouter un nouvel élément au tableau `todos` en appelant `setTodos` pour provoquer la mise à jour du composant.

Le nouvel objet que vous ajouterez au tableau recevra :
- `Math.random().toString()` à la clé `_id`
- `newTodo` à la clé `title`
- `false` à la clé `completed`

