import Pawn from './Pawn'

const Tile = ({ figure, id, movePiece }) => {
  let taken
  if (figure === id) {
    taken = true
  } else {
    taken = false
  }
  let sum = 0
  for (let i = 0; i < id.length; i++) {
    sum += Number(id[i])
  }
  return (
    <div
      className={`${sum % 2 === 0 ? 'blackTile' : 'whiteTile'} ${
        taken ? 'taken' : ''
      }`}
      onClick={() => movePiece(id)}
    >
      <div className={taken ? '' : 'available'}></div>
      {figure === id ? <Pawn /> : null}
    </div>
  )
}

export default Tile
