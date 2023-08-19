import React from 'react'
import imgWhite from '../../model/whiteQueen.png'
import imgBlack from '../../model/blackQueen.png'

const Queen = ({ color }: { color: string }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Queen
