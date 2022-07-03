import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { initGame } from './board'

export const previewSlice = createSlice({
  name: 'preview',
  initialState: true,
  reducers: {
    set: (_, action: PayloadAction<boolean>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(initGame, () => true)
  },
})

export const { set } = previewSlice.actions

export default previewSlice.reducer
