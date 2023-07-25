import { useState } from 'react'
import Row from './Row'

const Board = () => {
  const [piecesLocation, setPiecesLocation] = useState({
    pawn: ['12', '22', '32', '42', '52', '62', '72', '82'],
    bishop: ['31', '61'],
    knight: ['21', '71'],
    rook: ['11', '81'],
    king: ['51'],
    queen: ['41'],
  })
  const [nonChosenPieces, setNonChosenPieces] = useState([])
  const [movingPiece, setMovingPiece] = useState(false)
  const [currentPiece, setCurrentPiece] = useState('')
  const movePiece = (id, figure) => {
    if (
      piecesLocation[figure]?.filter((value) => value === id).length &&
      figure
    ) {
      setMovingPiece('true')
      setNonChosenPieces(piecesLocation[figure].filter((value) => value !== id))
      setCurrentPiece(figure)
    }
    if (movingPiece) {
      setPiecesLocation({
        ...piecesLocation,
        [currentPiece]: [...nonChosenPieces, id],
      })
      setNonChosenPieces([])
      setMovingPiece(false)
    }
  }

  return (
    <div className={`board ${movingPiece ? 'movingPiece' : ''}`}>
      <Row rowNumber={1} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={2} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={3} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={4} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={5} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={6} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={7} pawnLocation={piecesLocation} movePiece={movePiece} />
      <Row rowNumber={8} pawnLocation={piecesLocation} movePiece={movePiece} />
    </div>
  )
}

export default Board
