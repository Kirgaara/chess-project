import React from 'react'
import imgWhite from '../../model/whiteKnight.png'
import imgBlack from '../../model/blackKnight.png'

const Knight = ({ color }: { color: string }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Knight
