import { createReducer } from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions.js';

const initialState = {
  name: 'Romain',
  likes: 10,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      state.likes++; // sera traduit par redux toolkit
      // en { ...state, likes: state.likes + 1 }
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});
