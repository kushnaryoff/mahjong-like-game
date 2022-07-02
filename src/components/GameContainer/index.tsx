import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@store'
import GameBoard from '@components/GameBoard'
import GameEnd from '@components/GameEnd'

import './styles.scss'

const GameContainer = () => {
  const gameEnded = useSelector((state: RootState) => state.gameEnded)

  return (
    <div className="game-container">
      <div className="game-container__title-container">
        <div className="game-container__title">Mahjong Game</div>
      </div>
      <div className="game-container__content">
        {!gameEnded ? <GameBoard /> : <GameEnd />}
      </div>
    </div>
  )
}

export default memo(GameContainer)
