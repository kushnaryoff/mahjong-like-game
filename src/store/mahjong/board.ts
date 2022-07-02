import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { MahjongBoard, MahjongCard } from 'type/mahjong'

const initialState: MahjongBoard = null

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<MahjongBoard>) => action.payload,
    changeCard: (state, action: PayloadAction<MahjongCard>) => {
      const {
        position: { x, y },
      } = action.payload

      const stateCopy = [...state]
      stateCopy[y][x] = action.payload
      return stateCopy
    },
  },
})

export const { changeCard } = boardSlice.actions

export default boardSlice.reducer
