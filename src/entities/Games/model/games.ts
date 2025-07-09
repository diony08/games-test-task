import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GamesState } from '@/shared/assets/types/types';

export const initialState: GamesState = {
  value: [],
};

export const gamesModelSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addLoadGame: (state, actions) => {
      console.log(actions.payload)
      state.value = [...state.value, actions.payload]
    },
  },
});

export const { addLoadGame } = gamesModelSlice.actions;

export const gamesSelector = (state: {games: GamesState}) => state.games.value;