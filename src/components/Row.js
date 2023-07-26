import React from 'react'
import Tile from './Tile'

const Row = ({ rowNumber, pawnLocation, movePiece, possibleMoves }) => {
  return (
    <div>
      <Tile
        id={rowNumber + '8'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '7'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '6'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '5'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '4'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '3'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '2'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
      <Tile
        id={rowNumber + '1'}
        figureLocations={pawnLocation}
        movePiece={movePiece}
        possibleMoves={possibleMoves}
      ></Tile>
    </div>
  )
}

export default Row
