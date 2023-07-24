import { useState } from 'react'
import WhiteTile from './WhiteTile'
import BlackTile from './BlackTile'

const MicroBoard = () => {
  const [pawnLocation, setPawnLocation] = useState('a1')
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
      <div>
        <WhiteTile
          id="a2"
          figure={pawnLocation}
          movePiece={movePawn}
        ></WhiteTile>
        <BlackTile
          id="a1"
          figure={pawnLocation}
          movePiece={movePawn}
        ></BlackTile>
      </div>
      <div>
        <BlackTile
          id="b2"
          figure={pawnLocation}
          movePiece={movePawn}
        ></BlackTile>
        <WhiteTile
          id="b1"
          figure={pawnLocation}
          movePiece={movePawn}
        ></WhiteTile>
      </div>
    </div>
  )
}

export default MicroBoard
