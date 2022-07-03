import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const previewSlice = createSlice({
  name: 'preview',
  initialState: true,
  reducers: {
    set: (_, action: PayloadAction<boolean>) => action.payload,
  },
})

export const { set } = previewSlice.actions

export default previewSlice.reducer
