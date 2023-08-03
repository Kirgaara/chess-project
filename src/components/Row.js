import React from 'react'
import Tile from './Tile'

const Row = ({
  rowNumber,
  pawnLocation,
  movePiece,
  possibleMoves,
  takenTiles,
}) => {
  const tileID = [8, 7, 6, 5, 4, 3, 2, 1]
  return (
    <div>
      {tileID.map((el) => (
        <Tile
          key={el}
          id={rowNumber + '' + el}
          figureLocations={pawnLocation}
          movePiece={movePiece}
          possibleMoves={possibleMoves}
          takenTiles={takenTiles}
        ></Tile>
      ))}
    </div>
  )
}

export default Row
