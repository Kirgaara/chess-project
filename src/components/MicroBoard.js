import { useState } from 'react'
import Row from './Row'

const MicroBoard = () => {
  const [pawnLocation, setPawnLocation] = useState('11')
  const [movingPiece, setMovingPiece] = useState(false)
  const movePawn = (id) => {
    if (movingPiece) {
      setPawnLocation(id)
      setMovingPiece(false)
    } else if (id === pawnLocation) {
      setMovingPiece('true')
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
