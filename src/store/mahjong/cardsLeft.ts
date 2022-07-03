import { createSlice } from '@reduxjs/toolkit'

import { BOARD_SIZE_MAP } from '@utils/mahjong'

import { changeCard, initGame } from './board'

export const cardsLeftSlice = createSlice({
  name: 'cardsLeft',
  initialState: 16,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        initGame,
        (_, action) =>
          BOARD_SIZE_MAP[action.payload] * BOARD_SIZE_MAP[action.payload]
      )
      .addCase(changeCard, (state, action) =>
        action.payload.isSolved ? state - 1 : state
      )
  },
})

export default cardsLeftSlice.reducer
