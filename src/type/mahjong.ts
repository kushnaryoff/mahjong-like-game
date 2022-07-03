export type BoardSize = 'small' | 'medium' | 'large'

export interface MahjongCard {
  value: number
  position: { x: number; y: number }
  isSelected: boolean
  isSolved: boolean
}

export type MahjongBoard = Array<Array<MahjongCard>>
