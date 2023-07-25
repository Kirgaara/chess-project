import Pawn from './ChessPieces/Pawn'
import Bishop from './ChessPieces/Bishop'
import Knight from './ChessPieces/Knight'
import Rook from './ChessPieces/Rook'
import King from './ChessPieces/King'
import Queen from './ChessPieces/Queen'
import { useState, useEffect } from 'react'

function placeFigure(figure) {
  switch (figure) {
    case 'pawn':
      return <Pawn />
    case 'bishop':
      return <Bishop />
    case 'knight':
      return <Knight />
    case 'rook':
      return <Rook />
    case 'king':
      return <King />
    case 'queen':
      return <Queen />
    default:
      return
  }
}

const Tile = ({ figureLocations, id, movePiece }) => {
  const [figure, setFigure] = useState('')
  let taken
  useEffect(() => {
    for (let key in figureLocations) {
      if (figureLocations[key].filter((value) => value === id).length) {
        switch (key) {
          case 'pawn':
            setFigure('pawn')
            break
          case 'bishop':
            setFigure('bishop')
            break
          case 'knight':
            setFigure('knight')
            break
          case 'rook':
            setFigure('rook')
            break
          case 'king':
            setFigure('king')
            break
          case 'queen':
            setFigure('queen')
            break
          default:
            break
        }
      }
    }
  }, [figureLocations, id])

  if (figureLocations[figure]?.filter((value) => value === id).length) {
    taken = true
  } else {
    taken = false
  }

  let sum = 0
  for (let i = 0; i < id.length; i++) {
    sum += Number(id[i])
  }
  return (
    <div
      className={`${sum % 2 === 0 ? 'blackTile' : 'whiteTile'} ${
        taken ? 'taken' : ''
      }`}
      onClick={() => movePiece(id, figure)}
      id={id}
    >
      <div className={taken ? '' : 'available'}></div>
      {figureLocations[figure]?.filter((value) => value === id).length
        ? placeFigure(figure)
        : null}
    </div>
  )
}

export default Tile
