export type BoardSize = 'small' | 'medium' | 'large'

export interface MahjongCard {
  value: number
  position: { x: number; y: number }
  isSolved: boolean
}

export type MahjongBoard = Array<Array<MahjongCard>>
