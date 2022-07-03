import React, { memo } from 'react'

import './styles.scss'

export const GameEnd = () => {
  return (
    <div className="game-end">
      <div className="game-end__content">You won!</div>
    </div>
  )
}

export default memo(GameEnd)
