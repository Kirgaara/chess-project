import { useEffect, useState } from 'react'
import Row from './Row'
import possibleMovesHandler from '../utils/possibleMovesHandler'

const Board = () => {
  const [piecesLocation, setPiecesLocation] = useState({
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
  const [movingPiece, setMovingPiece] = useState({
    figure: '',
    color: '',
    location: '',
    possibleMoves: [],
    nonChosenPieces: [],
    isMoving: false,
  })
  const [takenTiles, setTakenTiles] = useState({
    white: [],
    black: [],
    all: [],
  })
  useEffect(() => {
    let arrayAll = []
    let arrayBlack = []
    let arrayWhite = []
    for (let key in piecesLocation) {
      arrayWhite = arrayWhite.concat(piecesLocation[key].white)
      arrayBlack = arrayBlack.concat(piecesLocation[key].black)
    }
    arrayAll = arrayAll.concat(arrayWhite.concat(arrayBlack))
    setTakenTiles({ white: arrayWhite, black: arrayBlack, all: arrayAll })
  }, [piecesLocation])

  const movePiece = (id, figure) => {
    if (
      piecesLocation[figure]?.white.filter((value) => value === id).length &&
      !movingPiece.isMoving
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
        nonChosenPieces: piecesLocation[figure].white.filter(
          (value) => value !== id
        ),
        isMoving: 'true',
      })
    }
    if (
      piecesLocation[figure]?.black.filter((value) => value === id).length &&
      !movingPiece.isMoving
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
        nonChosenPieces: piecesLocation[figure].black.filter(
          (value) => value !== id
        ),
        isMoving: 'true',
      })
    }
    if (movingPiece.isMoving) {
      if (movingPiece.possibleMoves.filter((value) => value === id).length) {
        let newPiecesLocation = {}
        if (takenTiles.white.filter((value) => value === id).length) {
          for (let key in piecesLocation) {
            newPiecesLocation = {
              ...newPiecesLocation,
              [key]: {
                ...piecesLocation[key],
                white: piecesLocation[key].white.filter(
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
                ...piecesLocation[key],
                black: piecesLocation[key].black.filter(
                  (value) => value !== id
                ),
              },
            }
          }
          newPiecesLocation = {
            ...newPiecesLocation,
            [movingPiece.figure]: {
              ...newPiecesLocation[movingPiece.figure],
              [movingPiece.color]: [...movingPiece.nonChosenPieces, id],
            },
          }
        } else {
          newPiecesLocation = {
            ...piecesLocation,
            [movingPiece.figure]: {
              ...piecesLocation[movingPiece.figure],
              [movingPiece.color]: [...movingPiece.nonChosenPieces, id],
            },
          }
        }
        setPiecesLocation(newPiecesLocation)
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
  // const eatPiece = (id) => {
  //   let newPiecesLocation = {}
  //   if (takenTiles.white.filter((value) => value === id).length) {
  //     for (let key in piecesLocation) {
  //       newPiecesLocation = {
  //         ...newPiecesLocation,
  //         [key]: {
  //           ...piecesLocation[key],
  //           white: piecesLocation[key].white.filter((value) => value !== id),
  //         },
  //       }
  //     }
  //   } else {
  //     for (let key in piecesLocation) {
  //       newPiecesLocation = {
  //         ...newPiecesLocation,
  //         [key]: {
  //           ...piecesLocation[key],
  //           black: piecesLocation[key].black.filter((value) => value !== id),
  //         },
  //       }
  //     }
  //   }
  //   setPiecesLocation(newPiecesLocation)
  // }

  const numberOfRows = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={`board ${movingPiece.isMoving ? 'movingPiece' : ''}`}>
      {numberOfRows.map((el) => (
        <Row
          key={el}
          rowNumber={el}
          pawnLocation={piecesLocation}
          movePiece={movePiece}
          possibleMoves={movingPiece.possibleMoves}
          takenTiles={takenTiles.all}
        />
      ))}
    </div>
  )
}

export default Board
