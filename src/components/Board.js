import { useEffect, useState } from 'react'
import Row from './Row'
import possibleMovesHandler from './possibleMovesHandler'

const Board = () => {
  const [piecesLocation, setPiecesLocation] = useState({
    pawn: {
      white: ['12', '22', '32', '42', '52', '62', '72', '82'],
      black: ['17', '27', '37', '47', '57', '67', '77', '87'],
    },
    bishop: { white: ['31', '61'], black: ['38', '68'] },
    knight: { white: ['21', '71'], black: ['28', '78'] },
    rook: { white: ['11', '81'], black: ['18', '88'] },
    king: { white: ['51'], black: ['58'] },
    queen: { white: ['41'], black: ['48'] },
  })
  const [movingPiece, setMovingPiece] = useState({
    figure: '',
    color: '',
    location: '',
    possibleMoves: [],
    nonChosenPieces: [],
    isMoving: false,
  })
  const [takenTiles, setTakenTiles] = useState([])
  useEffect(() => {
    let array = []
    for (let key in piecesLocation) {
      array = array.concat(piecesLocation[key].white)
      array = array.concat(piecesLocation[key].black)
    }
    setTakenTiles(array)
  }, [piecesLocation])

  const movePiece = (id, figure) => {
    if (
      piecesLocation[figure]?.white.filter((value) => value === id).length &&
      figure
    ) {
      setMovingPiece({
        figure: figure,
        color: 'white',
        location: id,
        possibleMoves: possibleMovesHandler(id, figure, 'white', takenTiles),
        nonChosenPieces: piecesLocation[figure].white.filter(
          (value) => value !== id
        ),
        isMoving: 'true',
      })
    }
    if (
      piecesLocation[figure]?.black.filter((value) => value === id).length &&
      figure
    ) {
      setMovingPiece({
        figure: figure,
        color: 'black',
        location: id,
        possibleMoves: possibleMovesHandler(id, figure, 'black', takenTiles),
        nonChosenPieces: piecesLocation[figure].black.filter(
          (value) => value !== id
        ),
        isMoving: 'true',
      })
    }
    if (movingPiece.isMoving) {
      if (movingPiece.possibleMoves.filter((value) => value === id).length) {
        setPiecesLocation({
          ...piecesLocation,
          [movingPiece.figure]: {
            ...piecesLocation[movingPiece.figure],
            [movingPiece.color]: [...movingPiece.nonChosenPieces, id],
          },
        })
        setMovingPiece({
          figure: '',
          color: '',
          location: '',
          possibleMoves: [],
          nonChosenPieces: [],
          isMoving: false,
        })
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
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={2}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={3}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={4}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={5}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={6}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={7}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
      <Row
        rowNumber={8}
        pawnLocation={piecesLocation}
        movePiece={movePiece}
        possibleMoves={movingPiece.possibleMoves}
        takenTiles={takenTiles}
      />
    </div>
  )
}

export default Board
