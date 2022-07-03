import { configureStore } from '@reduxjs/toolkit'

import {
  boardReducer,
  selectedReducer,
  gameDisabledReducer,
  cardsLeftReducer,
  previewReducer,
} from './mahjong'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    selected: selectedReducer,
    gameDisabled: gameDisabledReducer,
    cardsLeft: cardsLeftReducer,
    preview: previewReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
