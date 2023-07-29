import imgWhite from '../../model/whiteKnight.png'
import imgBlack from '../../model/blackKnight.png'

const Knight = ({ color }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Knight
