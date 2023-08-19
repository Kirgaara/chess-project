function checkTileTaken(array: string[], id: string) {
  return !!array.filter((value) => value === id).length
}

const possibleMovesHandler = (
  id: string,
  figure: string,
  color: string,
  takenTiles: string[],
  takenTilesWhite: string[],
  takenTilesBlack: string[]
) => {
  switch (figure) {
    default:
      return []
    case 'pawn':
      let pawnArray: string[] = []
      if (color === 'white') {
        if (!checkTileTaken(takenTiles, `${Number(id) + 1}`)) {
          pawnArray.push(`${Number(id) + 1}`)
          if (
            checkTileTaken(
              ['12', '22', '32', '42', '52', '62', '72', '82'],
              id
            ) &&
            !checkTileTaken(takenTiles, `${Number(id) + 2}`)
          ) {
            pawnArray.push(`${Number(id) + 2}`)
          }
        }
        if (
          checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          pawnArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          pawnArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
      } else {
        if (!checkTileTaken(takenTiles, `${Number(id) - 1}`)) {
          pawnArray.push(`${Number(id) - 1}`)
          if (
            checkTileTaken(
              ['17', '27', '37', '47', '57', '67', '77', '87'],
              id
            ) &&
            !checkTileTaken(takenTiles, `${Number(id) - 2}`)
          ) {
            pawnArray.push(`${Number(id) - 2}`)
          }
        }
        if (
          checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          pawnArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          pawnArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
      }
      return pawnArray
    case 'bishop':
      let array: string[] = []
      let bishopTopLeft: boolean = true
      let bishopTopRight: boolean = true
      let bishopBotLeft: boolean = true
      let bishopBotRight: boolean = true
      for (let i = 1; i < 8; i++) {
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
          ) &&
          bishopTopRight
        ) {
          array.push(`${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            ) &&
            bishopTopRight
          ) {
            array.push(`${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            ) &&
            bishopTopRight
          ) {
            array.push(`${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`)
          }
          bishopTopRight = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
          ) &&
          bishopTopLeft
        ) {
          array.push(`${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            ) &&
            bishopTopLeft
          ) {
            array.push(`${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            ) &&
            bishopTopLeft
          ) {
            array.push(`${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`)
          }
          bishopTopLeft = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
          ) &&
          bishopBotRight
        ) {
          array.push(`${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            ) &&
            bishopBotRight
          ) {
            array.push(`${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            ) &&
            bishopBotRight
          ) {
            array.push(`${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`)
          }
          bishopBotRight = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
          ) &&
          bishopBotLeft
        ) {
          array.push(`${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            ) &&
            bishopBotLeft
          ) {
            array.push(`${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            ) &&
            bishopBotLeft
          ) {
            array.push(`${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`)
          }
          bishopBotLeft = false
        }
      }
      array = array
        .filter(
          (value) =>
            Number(value) < 89 &&
            Number(value) > 10 &&
            Number(value) % 10 !== 0 &&
            Number(value[0]) !== 0 &&
            Number(value) % 10 !== 9
        )
        .sort()
      return array
    case 'knight':
      let knightArray: string[] = []
      if (color === 'white') {
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`)
        }
      } else {
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`
          )
        ) {
          knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`)
        }
      }
      knightArray = knightArray
        .filter(
          (value) =>
            Number(value) < 89 &&
            Number(value) > 10 &&
            Number(value) % 10 !== 0 &&
            Number(value[0]) !== 0 &&
            Number(value) % 10 !== 9
        )
        .sort()
      return knightArray
    case 'rook':
      let rookArray: string[] = []
      let rookTop: boolean = true
      let rookBottom: boolean = true
      let rookLeft: boolean = true
      let rookRight: boolean = true
      for (let i = 1; i < 8; i++) {
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`) &&
          rookRight
        ) {
          rookArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${id[1]}`
            ) &&
            rookRight
          ) {
            rookArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${id[1]}`
            ) &&
            rookRight
          ) {
            rookArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
          }
          rookRight = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`) &&
          rookLeft
        ) {
          rookArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${id[1]}`
            ) &&
            rookLeft
          ) {
            rookArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${id[1]}`
            ) &&
            rookLeft
          ) {
            rookArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
          }
          rookLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`) &&
          rookTop
        ) {
          rookArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${id[0]}${Number(id[1]) + i + ''}`
            ) &&
            rookTop
          ) {
            rookArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${id[0]}${Number(id[1]) + i + ''}`
            ) &&
            rookTop
          ) {
            rookArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
          }
          rookTop = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`) &&
          rookBottom
        ) {
          rookArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${id[0]}${Number(id[1]) - i + ''}`
            ) &&
            rookBottom
          ) {
            rookArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${id[0]}${Number(id[1]) - i + ''}`
            ) &&
            rookBottom
          ) {
            rookArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
          }
          rookBottom = false
        }
      }
      rookArray = rookArray
        .filter(
          (value) =>
            Number(value) < 89 &&
            Number(value) > 10 &&
            Number(value) % 10 !== 0 &&
            Number(value[0]) !== 0 &&
            Number(value) % 10 !== 9
        )
        .sort()
      return rookArray
    case 'king':
      let kingArray: string[] = []
      if (color === 'white') {
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesWhite,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
      } else {
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`)
        }
        if (
          !checkTileTaken(
            takenTilesBlack,
            `${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`
          )
        ) {
          kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`)
        }
      }
      kingArray = kingArray
        .filter(
          (value) =>
            Number(value) < 89 &&
            Number(value) > 10 &&
            Number(value) % 10 !== 0 &&
            Number(value[0]) !== 0 &&
            Number(value) % 10 !== 9
        )
        .sort()
      return kingArray
    case 'queen':
      let queenArray: string[] = []
      let queenTopLeft: boolean = true
      let queenTopRight: boolean = true
      let queenBotLeft: boolean = true
      let queenBotRight: boolean = true
      let queenTop: boolean = true
      let queenBottom: boolean = true
      let queenLeft: boolean = true
      let queenRight: boolean = true
      for (let i = 1; i < 8; i++) {
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
          ) &&
          queenTopRight
        ) {
          queenArray.push(`${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            ) &&
            queenTopRight
          ) {
            queenArray.push(
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            )
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            ) &&
            queenTopRight
          ) {
            queenArray.push(
              `${Number(id[0]) + i + ''}${Number(id[1]) + i + ''}`
            )
          }
          queenTopRight = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
          ) &&
          queenTopLeft
        ) {
          queenArray.push(`${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            ) &&
            queenTopLeft
          ) {
            queenArray.push(
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            )
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            ) &&
            queenTopLeft
          ) {
            queenArray.push(
              `${Number(id[0]) - i + ''}${Number(id[1]) + i + ''}`
            )
          }
          queenTopLeft = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
          ) &&
          queenBotRight
        ) {
          queenArray.push(`${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            ) &&
            queenBotRight
          ) {
            queenArray.push(
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            )
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            ) &&
            queenBotRight
          ) {
            queenArray.push(
              `${Number(id[0]) + i + ''}${Number(id[1]) - i + ''}`
            )
          }
          queenBotRight = false
        }
        if (
          !checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
          ) &&
          queenBotLeft
        ) {
          queenArray.push(`${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`)
        }
        if (
          checkTileTaken(
            takenTiles,
            `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
          )
        ) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            ) &&
            queenBotLeft
          ) {
            queenArray.push(
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            )
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            ) &&
            queenBotLeft
          ) {
            queenArray.push(
              `${Number(id[0]) - i + ''}${Number(id[1]) - i + ''}`
            )
          }
          queenBotLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`) &&
          queenRight
        ) {
          queenArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) + i + ''}${id[1]}`
            ) &&
            queenRight
          ) {
            queenArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) + i + ''}${id[1]}`
            ) &&
            queenRight
          ) {
            queenArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
          }
          queenRight = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`) &&
          queenLeft
        ) {
          queenArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${Number(id[0]) - i + ''}${id[1]}`
            ) &&
            queenLeft
          ) {
            queenArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${Number(id[0]) - i + ''}${id[1]}`
            ) &&
            queenLeft
          ) {
            queenArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
          }
          queenLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`) &&
          queenTop
        ) {
          queenArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${id[0]}${Number(id[1]) + i + ''}`
            ) &&
            queenTop
          ) {
            queenArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${id[0]}${Number(id[1]) + i + ''}`
            ) &&
            queenTop
          ) {
            queenArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
          }
          queenTop = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`) &&
          queenBottom
        ) {
          queenArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`)) {
          if (
            color === 'white' &&
            checkTileTaken(
              takenTilesBlack,
              `${id[0]}${Number(id[1]) - i + ''}`
            ) &&
            queenBottom
          ) {
            queenArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
          }
          if (
            color === 'black' &&
            checkTileTaken(
              takenTilesWhite,
              `${id[0]}${Number(id[1]) - i + ''}`
            ) &&
            queenBottom
          ) {
            queenArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
          }
          queenBottom = false
        }
      }
      queenArray = queenArray
        .filter(
          (value) =>
            Number(value) < 89 &&
            Number(value) > 10 &&
            Number(value) % 10 !== 0 &&
            Number(value[0]) !== 0 &&
            Number(value) % 10 !== 9
        )
        .sort()
      return queenArray
  }
}

export default possibleMovesHandler
