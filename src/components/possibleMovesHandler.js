function checkTileTaken(array, id) {
  return !!array.filter((value) => value === id).length
}

const possibleMovesHandler = (id, figure, takenTiles) => {
  switch (figure) {
    default:
      return []
    case 'pawn':
      if (!checkTileTaken(takenTiles, `${Number(id) + 1}`)) {
        if (
          checkTileTaken(['12', '22', '32', '42', '52', '62', '72', '82'], id)
        ) {
          return [`${Number(id) + 1}`, `${Number(id) + 2}`]
        }
        return [`${Number(id) + 1}`]
      }
      return []
    case 'bishop':
      let array = []
      let bishopTopLeft = true
      let bishopTopRight = true
      let bishopBotLeft = true
      let bishopBotRight = true
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
          bishopBotLeft = false
        }
      }
      array = array
        .filter(
          (value) =>
            value < 89 &&
            value > 10 &&
            value % 10 !== 0 &&
            value[0] !== 0 &&
            value % 10 !== 9
        )
        .sort()
      return array
    case 'knight':
      let knightArray = []
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 2 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) + 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) + 2 + ''}${Number(id[1]) - 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 2 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 2 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) - 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) - 2 + ''}${Number(id[1]) + 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`
        )
      ) {
        knightArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 2 + ''}`)
      }
      knightArray = knightArray
        .filter(
          (value) =>
            value < 89 &&
            value > 10 &&
            value % 10 !== 0 &&
            value[0] !== 0 &&
            value % 10 !== 9
        )
        .sort()
      return knightArray
    case 'rook':
      let rookArray = []
      let rookTop = true
      let rookBottom = true
      let rookLeft = true
      let rookRight = true
      for (let i = 1; i < 8; i++) {
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`) &&
          rookRight
        ) {
          rookArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`)) {
          rookRight = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`) &&
          rookLeft
        ) {
          rookArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`)) {
          rookLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`) &&
          rookTop
        ) {
          rookArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`)) {
          rookTop = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`) &&
          rookBottom
        ) {
          rookArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`)) {
          rookBottom = false
        }
      }
      rookArray = rookArray
        .filter(
          (value) =>
            value < 89 &&
            value > 10 &&
            value % 10 !== 0 &&
            value[0] !== 0 &&
            value % 10 !== 9
        )
        .sort()
      return rookArray
    case 'king':
      let kingArray = []
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 0 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) - 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) + 0 + ''}${Number(id[1]) - 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) - 0 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) - 1 + ''}${Number(id[1]) + 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) - 0 + ''}${Number(id[1]) + 1 + ''}`)
      }
      if (
        !checkTileTaken(
          takenTiles,
          `${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`
        )
      ) {
        kingArray.push(`${Number(id[0]) + 1 + ''}${Number(id[1]) + 1 + ''}`)
      }
      kingArray = kingArray
        .filter(
          (value) =>
            value < 89 &&
            value > 10 &&
            value % 10 !== 0 &&
            value[0] !== 0 &&
            value % 10 !== 9
        )
        .sort()
      return kingArray
    case 'queen':
      let queenArray = []
      let queenTopLeft = true
      let queenTopRight = true
      let queenBotLeft = true
      let queenBotRight = true
      let queenTop = true
      let queenBottom = true
      let queenLeft = true
      let queenRight = true
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
          queenBotLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`) &&
          queenRight
        ) {
          queenArray.push(`${Number(id[0]) + i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) + i + ''}${id[1]}`)) {
          queenRight = false
        }
        if (
          !checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`) &&
          queenLeft
        ) {
          queenArray.push(`${Number(id[0]) - i + ''}${id[1]}`)
        }
        if (checkTileTaken(takenTiles, `${Number(id[0]) - i + ''}${id[1]}`)) {
          queenLeft = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`) &&
          queenTop
        ) {
          queenArray.push(`${id[0]}${Number(id[1]) + i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) + i + ''}`)) {
          queenTop = false
        }
        if (
          !checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`) &&
          queenBottom
        ) {
          queenArray.push(`${id[0]}${Number(id[1]) - i + ''}`)
        }
        if (checkTileTaken(takenTiles, `${id[0]}${Number(id[1]) - i + ''}`)) {
          queenBottom = false
        }
      }
      queenArray = queenArray
        .filter(
          (value) =>
            value < 89 &&
            value > 10 &&
            value % 10 !== 0 &&
            value[0] !== 0 &&
            value % 10 !== 9
        )
        .sort()
      return queenArray
  }
}

export default possibleMovesHandler
