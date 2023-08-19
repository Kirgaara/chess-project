import React, { useEffect, useState } from 'react'
import { AllPieces, MovingPiece } from '../utils/interfaces'
import Row from './Row'
import possibleMovesHandler from '../utils/possibleMovesHandler'
import GameOver from './GameOver'

const Board = () => {
  const [piecesLocation, setPiecesLocation] = useState<AllPieces>({
    pawn: {
      white: ['12', '22', '32', '42', '52', '62', '72', '82'],
      black: ['17', '27', '37', '47', '57', '67', '77', '87'],
    },
    bishop: { white: ['31', '61'], black: ['38', '68'] },
    knight: { white: ['21', '71'], black: ['28', '78'] },
    rook: { white: ['11', '81'], black: ['18', '88'] },
    king: { white: ['51'], black: ['58'] },
    queen: { white: ['41'], black: ['48'] },
  })
  const [movingPiece, setMovingPiece] = useState<MovingPiece>({
    figure: '',
    color: '',
    location: '',
    possibleMoves: [],
    nonChosenPieces: [],
    isMoving: false,
  })
  const [takenTiles, setTakenTiles] = useState<{
    white: string[]
    black: string[]
    all: string[]
  }>({
    white: [],
    black: [],
    all: [],
  })
  const [currentTurn, setCurrentTurn] = useState<'white' | 'black'>('white')
  useEffect(() => {
    let arrayAll: string[] = []
    let arrayBlack: string[] = []
    let arrayWhite: string[] = []
    for (let key in piecesLocation) {
      arrayWhite = arrayWhite.concat(
        piecesLocation[key as keyof AllPieces].white
      )
      arrayBlack = arrayBlack.concat(
        piecesLocation[key as keyof AllPieces].black
      )
    }
    arrayAll = arrayAll.concat(arrayWhite.concat(arrayBlack))
    setTakenTiles({ white: arrayWhite, black: arrayBlack, all: arrayAll })
  }, [piecesLocation])

  const movePiece = (id: string, figure: string) => {
    if (
      piecesLocation[figure as keyof AllPieces]?.white.filter(
        (value) => value === id
      ).length &&
      !movingPiece.isMoving &&
      currentTurn === 'white'
    ) {
      setMovingPiece({
        figure: figure,
        color: 'white',
        location: id,
        possibleMoves: possibleMovesHandler(
          id,
          figure,
          'white',
          takenTiles.all,
          takenTiles.white,
          takenTiles.black
        ),
        nonChosenPieces: piecesLocation[figure as keyof AllPieces].white.filter(
          (value) => value !== id
        ),
        isMoving: true,
      })
    }
    if (
      piecesLocation[figure as keyof AllPieces]?.black.filter(
        (value) => value === id
      ).length &&
      !movingPiece.isMoving &&
      currentTurn === 'black'
    ) {
      setMovingPiece({
        figure: figure,
        color: 'black',
        location: id,
        possibleMoves: possibleMovesHandler(
          id,
          figure,
          'black',
          takenTiles.all,
          takenTiles.white,
          takenTiles.black
        ),
        nonChosenPieces: piecesLocation[figure as keyof AllPieces].black.filter(
          (value) => value !== id
        ),
        isMoving: true,
      })
    }
    if (movingPiece.isMoving) {
      if (movingPiece.possibleMoves.filter((value) => value === id).length) {
        let newPiecesLocation: AllPieces = {
          pawn: {
            white: [],
            black: [],
          },
          bishop: { white: [], black: [] },
          knight: { white: [], black: [] },
          rook: { white: [], black: [] },
          king: { white: [], black: [] },
          queen: { white: [], black: [] },
        }
        if (takenTiles.white.filter((value) => value === id).length) {
          for (let key in piecesLocation) {
            newPiecesLocation = {
              ...newPiecesLocation,
              [key]: {
                ...piecesLocation[key as keyof AllPieces],
                white: piecesLocation[key as keyof AllPieces].white.filter(
                  (value) => value !== id
                ),
              },
            }
          }
        } else if (takenTiles.black.filter((value) => value === id).length) {
          for (let key in piecesLocation) {
            newPiecesLocation = {
              ...newPiecesLocation,
              [key]: {
                ...piecesLocation[key as keyof AllPieces],
                black: piecesLocation[key as keyof AllPieces].black.filter(
                  (value) => value !== id
                ),
              },
            }
          }
          newPiecesLocation = {
            ...newPiecesLocation,
            [movingPiece.figure]: {
              ...newPiecesLocation[movingPiece.figure as keyof AllPieces],
              [movingPiece.color]: [...movingPiece.nonChosenPieces, id],
            },
          }
        } else {
          newPiecesLocation = {
            ...piecesLocation,
            [movingPiece.figure]: {
              ...piecesLocation[movingPiece.figure as keyof AllPieces],
              [movingPiece.color]: [...movingPiece.nonChosenPieces, id],
            },
          }
        }
        setPiecesLocation(newPiecesLocation)
        if (currentTurn === 'white') {
          setCurrentTurn('black')
        } else {
          setCurrentTurn('white')
        }
        setMovingPiece({
          figure: '',
          color: '',
          location: '',
          possibleMoves: [],
          nonChosenPieces: [],
          isMoving: false,
        })
      } else {
        setMovingPiece({
          figure: '',
          color: '',
          location: '',
          possibleMoves: [],
          nonChosenPieces: [],
          isMoving: false,
        })
      }
    }
  }

  let gameEnded: boolean = false
  let winner: '' | 'Black' | 'White' = ''
  if (!piecesLocation.king.white.length) {
    gameEnded = true
    winner = 'Black'
  }
  if (!piecesLocation.king.black.length) {
    gameEnded = true
    winner = 'White'
  }

  const gameRestart = (): void => {
    gameEnded = false
    setPiecesLocation({
      pawn: {
        white: ['12', '22', '32', '42', '52', '62', '72', '82'],
        black: ['17', '27', '37', '47', '57', '67', '77', '87'],
      },
      bishop: { white: ['31', '61'], black: ['38', '68'] },
      knight: { white: ['21', '71'], black: ['28', '78'] },
      rook: { white: ['11', '81'], black: ['18', '88'] },
      king: { white: ['51'], black: ['58'] },
      queen: { white: ['41'], black: ['48'] },
    })
  }

  const numberOfRows: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={`board ${movingPiece.isMoving ? 'movingPiece' : ''}`}>
      {gameEnded ? <GameOver winner={winner} restart={gameRestart} /> : null}
      {numberOfRows.map((el) => (
        <Row
          key={el}
          rowNumber={el}
          piecesLocation={piecesLocation}
          movePiece={movePiece}
          possibleMoves={movingPiece.possibleMoves}
          takenTiles={takenTiles.all}
        />
      ))}
    </div>
  )
}

export default Board
