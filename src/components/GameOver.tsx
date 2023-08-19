import React from 'react'
import { RiLoopRightLine } from 'react-icons/ri'

type ParamsType = {
  winner: string
  restart: () => void
}

const GameOver = ({ winner, restart }: ParamsType) => {
  return (
    <div className="end-screen">
      <h2>Game Over</h2>
      <h3>{winner + ' won'}</h3>
      <button onClick={restart}>
        <RiLoopRightLine className="restart-icon" /> Start again?
      </button>
    </div>
  )
}

export default GameOver
