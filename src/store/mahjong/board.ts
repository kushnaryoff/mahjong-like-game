import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { BoardSize, MahjongBoard, MahjongCard } from '@type/mahjong'
import { createBoard, mapBoard } from '@utils/mahjong'

const initialState: MahjongBoard = mapBoard(createBoard({ size: 'small' }))

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCard: (state, action: PayloadAction<MahjongCard>) => {
      const {
        position: { x, y },
      } = action.payload

      const stateCopy = [...state]
      stateCopy[y][x] = action.payload
      return stateCopy
    },
    initGame: (_, action: PayloadAction<BoardSize>) =>
      mapBoard(createBoard({ size: action.payload })),
  },
})

export const { changeCard, initGame } = boardSlice.actions

export default boardSlice.reducer
