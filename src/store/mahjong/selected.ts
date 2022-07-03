import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { MahjongCard } from '@type/mahjong'

import { changeCard, initGame } from './board'

export const selectedSlice = createSlice({
  name: 'selected',
  initialState: [] as Array<MahjongCard>,
  reducers: {
    set: (_, action: PayloadAction<Array<MahjongCard>>) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(initGame, () => [])
      .addCase(changeCard, (state, action) =>
        action.payload.isSolved ? [] : state
      )
  },
})

export const { set } = selectedSlice.actions

export default selectedSlice.reducer
