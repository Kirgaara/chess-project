import React from 'react'
import Tile from './Tile'

const Row = ({ rowNumber, pawnLocation, movePiece }) => {
  return (
    <div>
      <Tile
        id={rowNumber + '8'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '7'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '6'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '5'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '4'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '3'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '2'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
      <Tile
        id={rowNumber + '1'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
      ></Tile>
    </div>
  )
}

export default Row
