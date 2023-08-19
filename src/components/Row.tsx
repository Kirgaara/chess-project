import React from 'react'
import { RowParams } from '../utils/interfaces'
import Tile from './Tile'

const Row = ({
  rowNumber,
  piecesLocation,
  movePiece,
  possibleMoves,
  takenTiles,
}: RowParams) => {
  const tileID = [8, 7, 6, 5, 4, 3, 2, 1]
  return (
    <div className="row">
      {tileID.map((el) => (
        <Tile
          key={el}
          id={rowNumber + '' + el}
          figureLocations={piecesLocation}
          movePiece={movePiece}
          possibleMoves={possibleMoves}
          takenTiles={takenTiles}
        ></Tile>
      ))}
    </div>
  )
}

export default Row
