import React from 'react'
import Pawn from './Pawn'

const Tile = ({ figure, id, movePiece }) => {
  return (
    <div className="blackTile" onClick={() => movePiece(id)}>
      {figure === id ? <Pawn /> : null}
    </div>
  )
}

export default Tile
