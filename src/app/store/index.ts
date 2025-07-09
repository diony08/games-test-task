import { gamesModelSlice } from '@/entities/Games'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { allGamesApi } from '../api'

export const store = configureStore({
  reducer: {
    games: gamesModelSlice.reducer,
    [allGamesApi.reducerPath]: allGamesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allGamesApi.middleware)
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)