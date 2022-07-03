import React, { memo, useCallback } from 'react'
import clsx from 'clsx'

import type { MahjongCard } from '@type/mahjong'

import './styles.scss'

interface Props {
  card: MahjongCard
  onClick: (card: MahjongCard) => void
  isSelected: boolean
  isDisabled: boolean
  preview: boolean
}

const Card = ({ card, onClick, isSelected, isDisabled, preview }: Props) => {
  const handleClick = useCallback(() => {
    if (isDisabled || card.isSolved || isSelected) {
      return
    }

    onClick(card)
  }, [isDisabled, card, isSelected, onClick])

  return (
    <div
      className={clsx(
        'game-card',
        isSelected && 'game-card--selected',
        card.isSolved && 'game-card--solved',
        isDisabled && 'game-card--disabled'
      )}
      onClick={handleClick}
    >
      {preview || isSelected || card.isSolved ? card.value : null}
    </div>
  )
}

export default memo(Card)
