import React, { memo, useMemo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

import { RootState } from '@store'
import GameBoard from '@components/GameBoard'
import GameEnd from '@components/GameEnd'
import { BoardSize } from '@type/mahjong'
import { initGame } from '@store/mahjong/board'

import './styles.scss'

const GameContainer = () => {
  const dispatch = useDispatch()

  const cardsLeft = useSelector((state: RootState) => state.cardsLeft)

  const preview = useSelector((state: RootState) => state.preview)

  const [boardSize, setBoardSize] = useState<BoardSize>('small')

  const handleSizeChange = useCallback<
    React.ChangeEventHandler<HTMLSelectElement>
  >((event) => {
    setBoardSize(event.target.value as BoardSize)
  }, [])

  const sizeOptions = useMemo<Array<{ value: BoardSize; name: string }>>(
    () => [
      { name: 'Small', value: 'small' },
      { name: 'Medium', value: 'medium' },
      { name: 'Large', value: 'large' },
    ],
    []
  )

  const handleStartGame = useCallback(() => {
    if (preview) {
      return
    }

    dispatch(initGame(boardSize))
  }, [preview, boardSize, dispatch])

  return (
    <div className="game-container">
      <div className="game-container__title-container">
        <div className="game-container__title">Mahjong Game</div>
        <div className="game-container__start-game-container">
          <select
            className="game-container__board-size-select"
            value={boardSize}
            onChange={handleSizeChange}
          >
            {sizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <div
            className={clsx(
              'game-container__start-game',
              preview && 'game-container__start-game--disabled'
            )}
            onClick={handleStartGame}
          >
            Start new game
          </div>
        </div>
      </div>
      <div className="game-container__content">
        {cardsLeft === 0 ? <GameEnd /> : null}
        <GameBoard />
      </div>
    </div>
  )
}

export default memo(GameContainer)
