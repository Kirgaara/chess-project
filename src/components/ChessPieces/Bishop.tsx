import React from 'react'
import imgWhite from '../../model/whiteBishop.png'
import imgBlack from '../../model/blackBishop.png'

const Bishop = ({ color }: { color: string }) => {
  return (
    <img
      src={color === 'white' ? imgWhite : imgBlack}
      className="chessPiece"
      alt=""
    ></img>
  )
}

export default Bishop
