import imgWhite from '../../model/whiteKing.png'
import imgBlack from '../../model/blackKing.png'

const King = ({ color }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default King
