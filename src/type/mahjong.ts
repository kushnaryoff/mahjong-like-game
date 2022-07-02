export interface MahjongCard {
  id: number
  value: number
  position: { x: number; y: number }
  isSelected: boolean
  isSolved: boolean
}

export type MahjongBoard = Array<Array<MahjongCard>>
