import Pawn from './Pawn'

const Tile = ({ figure, id, movePiece }) => {
  let taken
  if (figure === id) {
    taken = true
  } else {
    taken = false
  }
  return (
    <div
      className={`blackTile ${taken ? 'taken' : ''}`}
      onClick={() => movePiece(id)}
    >
      <div className={taken ? '' : 'available'}></div>
      {figure === id ? <Pawn /> : null}
    </div>
  )
}

export default Tile
