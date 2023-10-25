import { createReducer } from '@reduxjs/toolkit';
import { addTodo, setNewTodo } from './actions';

const initialState = {
  todos: {
    items: [
      { _id: Math.random().toString(), title: 'ABC', completed: false },
      { _id: Math.random().toString(), title: 'DEF', completed: true },
    ],
    newTodo: 'XYZ',
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNewTodo, (state, action) => {
      state.todos.newTodo = action.payload;
      // return {
      //   ...state,
      //   todos: {
      //     ...state.todos,
      //     newTodo: action.payload,
      //   },
      // };
    })
    .addCase(addTodo, (state, action) => {
      state.todos.items.push(action.payload);
      // return {
      //   ...state,
      //   todos: {
      //     ...state.todos,
      //     items: [...state.todos.items, action.payload],
      //   },
      // };
    });
});
