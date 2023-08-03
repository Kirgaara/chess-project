import { RiLoopRightLine } from 'react-icons/ri'

const GameOver = ({ winner, restart }) => {
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
