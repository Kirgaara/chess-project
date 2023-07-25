import { useState } from 'react'
import Row from './Row'

const MicroBoard = () => {
  const [pawnLocation, setPawnLocation] = useState(['11', '21', '31', '41'])
  const [nonChosenPieces, setNonChosenPieces] = useState([])
  const [movingPiece, setMovingPiece] = useState(false)
  const movePawn = (id) => {
    if (movingPiece) {
      setPawnLocation([...nonChosenPieces, id])
      setMovingPiece(false)
    } else if (pawnLocation.filter((value) => value === id).length) {
      setMovingPiece('true')
      setNonChosenPieces(pawnLocation.filter((value) => value !== id))
    }
  }

  return (
    <div className={`board ${movingPiece ? 'movingPiece' : ''}`}>
      <Row rowNumber={1} pawnLocation={pawnLocation} movePawn={movePawn} />
      <Row rowNumber={2} pawnLocation={pawnLocation} movePawn={movePawn} />
      <Row rowNumber={3} pawnLocation={pawnLocation} movePawn={movePawn} />
      <Row rowNumber={4} pawnLocation={pawnLocation} movePawn={movePawn} />
    </div>
  )
}

export default MicroBoard
