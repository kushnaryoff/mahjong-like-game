import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@store'
import type { MahjongCard } from '@type/mahjong'
import { changeCard } from '@store/mahjong/board'
import { set as setSelected } from '@store/mahjong/selected'
import { set as setGameDisabled } from '@store/mahjong/gameDisabled'
import { set as setPreview } from '@store/mahjong/preview'

import Card from './Card'
import './styles.scss'

export const GameBoard = () => {
  const dispatch = useDispatch()

  const mahjongBoard = useSelector((state: RootState) => state.board)

  const selected = useSelector((state: RootState) => state.selected)

  const gameDisabled = useSelector((state: RootState) => state.gameDisabled)

  const preview = useSelector((state: RootState) => state.preview)

  const isCardSelected = useCallback(
    (card: MahjongCard) =>
      selected.some(
        (selectedCard) =>
          selectedCard.position.x === card.position.x &&
          selectedCard.position.y === card.position.y
      ),
    [selected]
  )

  const handleCardClick = useCallback(
    (card: MahjongCard) => {
      if (selected[0] && selected[0].value === card.value) {
        dispatch(changeCard({ ...card, isSolved: true }))
        dispatch(changeCard({ ...selected[0], isSolved: true }))
        return
      }

      const newSelected = [...selected, card]
      dispatch(setSelected(newSelected))

      if (newSelected.length === 2) {
        dispatch(setGameDisabled(true))

        setTimeout(() => {
          dispatch(setSelected([]))
          dispatch(setGameDisabled(false))
        }, 1000)
      }
    },
    [selected, dispatch]
  )

  useEffect(() => {
    if (!preview) {
      return
    }

    setTimeout(() => {
      dispatch(setPreview(false))
    }, 2500)
  }, [dispatch, preview])

  return (
    <div className="game-board game-board--small">
      {mahjongBoard.flat().map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={handleCardClick}
          isSelected={isCardSelected(card)}
          isDisabled={preview || gameDisabled}
          preview={preview}
        />
      ))}
    </div>
  )
}

export default memo(GameBoard)
