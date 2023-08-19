import React from 'react'
import imgWhite from '../../model/whiteKing.png'
import imgBlack from '../../model/blackKing.png'

const King = ({ color }: { color: string }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default King
