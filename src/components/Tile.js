import Pawn from './ChessPieces/Pawn'
import Bishop from './ChessPieces/Bishop'
import Knight from './ChessPieces/Knight'
import Rook from './ChessPieces/Rook'
import King from './ChessPieces/King'
import Queen from './ChessPieces/Queen'
import { useState, useEffect } from 'react'

function placeFigure(figure, color) {
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
}) => {
  const [figure, setFigure] = useState({
    figure: '',
    color: '',
  })
  useEffect(() => {
    for (let key in figureLocations) {
      if (figureLocations[key].white.filter((value) => value === id).length) {
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
      if (figureLocations[key].black.filter((value) => value === id).length) {
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

  let sum = 0
  for (let i = 0; i < id.length; i++) {
    sum += Number(id[i])
  }
  let taken = false
  if (takenTiles.filter((value) => value === id).length) {
    taken = true
  }
  return (
    <div
      className={`${sum % 2 === 0 ? 'blackTile' : 'whiteTile'} ${
        taken ? 'taken' : ''
      }`}
      onClick={() => movePiece(id, figure.figure)}
      id={id}
    >
      <div
        className={
          possibleMoves.filter((value) => value === id).length
            ? 'available'
            : ''
        }
      ></div>
      {taken ? placeFigure(figure.figure, figure.color) : null}
    </div>
  )
}

export default Tile
