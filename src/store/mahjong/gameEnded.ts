import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { initGame } from './board'

export const gameEndedSlice = createSlice({
  name: 'gameEnded',
  initialState: false,
  reducers: {
    change: (_, action: PayloadAction<boolean>) => action.payload,
    toggle: (state) => !state,
  },
  extraReducers: (builder) => {
    builder.addCase(initGame, () => false)
  },
})

export const { change } = gameEndedSlice.actions

export default gameEndedSlice.reducer
