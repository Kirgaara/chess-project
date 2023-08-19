import React, { useState, useEffect } from 'react'
import Pawn from './ChessPieces/Pawn'
import Bishop from './ChessPieces/Bishop'
import Knight from './ChessPieces/Knight'
import Rook from './ChessPieces/Rook'
import King from './ChessPieces/King'
import Queen from './ChessPieces/Queen'
import { AllPieces, TileParams } from '../utils/interfaces'

function placeFigure(figure: string, color: string) {
  switch (figure) {
    case 'pawn':
      return <Pawn color={color} />
    case 'bishop':
      return <Bishop color={color} />
    case 'knight':
      return <Knight color={color} />
    case 'rook':
      return <Rook color={color} />
    case 'king':
      return <King color={color} />
    case 'queen':
      return <Queen color={color} />
    default:
      return
  }
}

const Tile = ({
  figureLocations,
  id,
  movePiece,
  possibleMoves,
  takenTiles,
}: TileParams) => {
  const [figure, setFigure] = useState({
    figure: '',
    color: '',
  })
  useEffect(() => {
    for (let key in figureLocations) {
      if (
        figureLocations[key as keyof AllPieces].white.filter(
          (value) => value === id
        ).length
      ) {
        switch (key) {
          case 'pawn':
            setFigure({ figure: 'pawn', color: 'white' })
            break
          case 'bishop':
            setFigure({ figure: 'bishop', color: 'white' })
            break
          case 'knight':
            setFigure({ figure: 'knight', color: 'white' })
            break
          case 'rook':
            setFigure({ figure: 'rook', color: 'white' })
            break
          case 'king':
            setFigure({ figure: 'king', color: 'white' })
            break
          case 'queen':
            setFigure({ figure: 'queen', color: 'white' })
            break
          default:
            break
        }
      }
      if (
        figureLocations[key as keyof AllPieces].black.filter(
          (value) => value === id
        ).length
      ) {
        switch (key) {
          case 'pawn':
            setFigure({ figure: 'pawn', color: 'black' })
            break
          case 'bishop':
            setFigure({ figure: 'bishop', color: 'black' })
            break
          case 'knight':
            setFigure({ figure: 'knight', color: 'black' })
            break
          case 'rook':
            setFigure({ figure: 'rook', color: 'black' })
            break
          case 'king':
            setFigure({ figure: 'king', color: 'black' })
            break
          case 'queen':
            setFigure({ figure: 'queen', color: 'black' })
            break
          default:
            break
        }
      }
    }
  }, [figureLocations, id])

  let sum: number = 0
  for (let i = 0; i < id.length; i++) {
    sum += Number(id[i])
  }
  let taken: boolean = false
  if (takenTiles.filter((value) => value === id).length) {
    taken = true
  }
  return (
    <div
      className={`${sum % 2 === 0 ? 'blackTile' : 'whiteTile'} ${
        taken && possibleMoves.filter((value) => value === id).length
          ? 'taken'
          : ''
      }`}
      onClick={() => movePiece(id, figure.figure)}
      id={id}
    >
      <div
        className={
          possibleMoves.filter((value) => value === id).length && !taken
            ? 'available'
            : ''
        }
      ></div>
      {taken ? placeFigure(figure.figure, figure.color) : null}
    </div>
  )
}

export default Tile
