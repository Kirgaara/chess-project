import imgWhite from '../../model/whiteRook.png'
import imgBlack from '../../model/blackRook.png'

const Rook = ({ color }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Rook
