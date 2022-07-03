import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const gameDisabledSlice = createSlice({
  name: 'gameDisabled',
  initialState: false,
  reducers: {
    set: (_, action: PayloadAction<boolean>) => action.payload,
  },
})

export const { set } = gameDisabledSlice.actions

export default gameDisabledSlice.reducer
