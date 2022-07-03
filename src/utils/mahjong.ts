import type { BoardSize, MahjongBoard, MahjongCard } from '@type/mahjong'

import { getPrimes } from './primes'

interface CreateBoardOptions {
  size: BoardSize
}

export const BOARD_SIZE_MAP: Record<BoardSize, number> = {
  small: 4,
  medium: 8,
  large: 12,
}

export const createBoard = ({
  size,
}: CreateBoardOptions): Array<Array<number>> => {
  const primes = getPrimes()

  const boardSize = BOARD_SIZE_MAP[size]
  const cardsAmount = boardSize * boardSize
  const pairsAmount = cardsAmount / 2

  const pairsValues = new Array(pairsAmount).fill(0).map(() => {
    const randomIndex = Math.floor(Math.random() * primes.length)
    return primes[randomIndex]
  })

  const boardValues = [...pairsValues, ...pairsValues]
  boardValues.sort(() => 0.5 - Math.random())

  let board: Array<Array<number>> = new Array(boardSize).fill(
    new Array(boardSize).fill(0)
  )

  board = board.map((row, i) =>
    row.map((_, j) => boardValues[i * boardSize + j])
  )

  return board
}

export const mapBoard = (board: Array<Array<number>>): MahjongBoard =>
  board.map((row, y) =>
    row.map<MahjongCard>((value, x) => ({
      value,
      position: { x, y },
      isSolved: false,
    }))
  )
