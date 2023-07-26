import { useState } from 'react'
import Row from './Row'

function possibleMovesHandler(id, figure) {
  switch (figure) {
    default:
      return []
    case 'pawn':
      if (
        ['12', '22', '32', '42', '52', '62', '72', '82'].filter(
          (value) => value === id
        ).length
      ) {
        return [`${Number(id) + 1}`, `${Number(id) + 2}`]
      }
      return [`${Number(id) + 1}`]
  }
}

const Board = () => {
  const [piecesLocation, setPiecesLocation] = useState({
    pawn: ['12', '22', '32', '42', '52', '62', '72', '82'],
    bishop: ['31', '61'],
    knight: ['21', '71'],
    rook: ['11', '81'],
    king: ['51'],
    queen: ['41'],
  })
  const [movingPiece, setMovingPiece] = useState({
    figure: '',
    location: '',
    possibleMoves: [],
    nonChosenPieces: [],
    isMoving: false,
  })
  const movePiece = (id, figure) => {
    if (
      piecesLocation[figure]?.filter((value) => value === id).length &&
      figure
    ) {
      setMovingPiece({
        figure: figure,
        location: id,
        possibleMoves: possibleMovesHandler(id, figure),
        nonChosenPieces: piecesLocation[figure].filter((value) => value !== id),
        isMoving: 'true',
      })
    }
    if (movingPiece.isMoving) {
      if (movingPiece.figure === 'pawn') {
        if (movingPiece.possibleMoves.filter((value) => value === id).length) {
          setPiecesLocation({
            ...piecesLocation,
            [movingPiece.figure]: [...movingPiece.nonChosenPieces, id],
          })
          setMovingPiece({
            figure: '',
            location: '',
            possibleMoves: [],
            nonChosenPieces: [],
            isMoving: false,
          })
        }
      }
    }
  }

  return (
    <div className={`board ${movingPiece.isMoving ? 'movingPiece' : ''}`}>
      <Row
        rowNumber={1}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={2}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={3}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={4}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={5}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={6}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={7}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
      <Row
        rowNumber={8}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
      />
    </div>
  )
}

export default Board
