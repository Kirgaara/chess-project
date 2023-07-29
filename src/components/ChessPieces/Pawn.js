import imgWhite from '../../model/whitePawn.png'
import imgBlack from '../../model/blackPawn.png'

const Pawn = ({ color }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Pawn
