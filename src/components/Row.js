import React from 'react'
import Tile from './Tile'

const Row = ({ rowNumber, pawnLocation, movePawn }) => {
  return (
    <div>
      <Tile
        id={rowNumber + '4'}
        figure={pawnLocation}
        movePiece={movePawn}
      ></Tile>
      <Tile
        id={rowNumber + '3'}
        figure={pawnLocation}
        movePiece={movePawn}
      ></Tile>
      <Tile
        id={rowNumber + '2'}
        figure={pawnLocation}
        movePiece={movePawn}
      ></Tile>
      <Tile
        id={rowNumber + '1'}
        figure={pawnLocation}
        movePiece={movePawn}
      ></Tile>
    </div>
  )
}

export default Row
