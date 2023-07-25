import React from 'react'
// import img from '../../model/pawn.png'

const Pawn = ({ onClick }) => {
  // return <img src={img} className="chessPiece" onClick={onClick} alt=""></img>
  return (
    <div className="chessPiece" onClick={onClick}>
      P
    </div>
  )
}

export default Pawn
