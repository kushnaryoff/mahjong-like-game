import { configureStore } from '@reduxjs/toolkit'

import { boardReducer, gameEndedReducer } from './mahjong'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    gameEnded: gameEndedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
