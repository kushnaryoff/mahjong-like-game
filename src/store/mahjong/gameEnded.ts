import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const gameEndedSlice = createSlice({
  name: 'gameEnded',
  initialState: false,
  reducers: {
    change: (_, action: PayloadAction<boolean>) => action.payload,
    toggle: (state) => !state,
  },
})

export const { change } = gameEndedSlice.actions

export default gameEndedSlice.reducer
