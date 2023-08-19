export interface BlackAndWhite {
  white: string[]
  black: string[]
}

export interface AllPieces {
  pawn: BlackAndWhite
  bishop: BlackAndWhite
  knight: BlackAndWhite
  rook: BlackAndWhite
  king: BlackAndWhite
  queen: BlackAndWhite
}

export interface MovingPiece {
  figure: string
  color: string
  location: string
  possibleMoves: string[]
  nonChosenPieces: string[]
  isMoving: boolean
}

export type RowParams = {
  rowNumber: number
  piecesLocation: AllPieces
  movePiece: (id: string, figure: string) => void
  possibleMoves: string[]
  takenTiles: string[]
}

export type TileParams = {
  figureLocations: AllPieces
  id: string
  movePiece: (id: string, figure: string) => void
  possibleMoves: string[]
  takenTiles: string[]
}
