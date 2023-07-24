import styles from './Board.module.css'
import Pawn from './Pawn'

const Board = () => {
  return (
    <div className={styles.board}>
      <div>
        <div className={styles.whiteTile} id="a8"></div>
        <div className={styles.blackTile} id="a7"></div>
        <div className={styles.whiteTile} id="a6"></div>
        <div className={styles.blackTile} id="a5"></div>
        <div className={styles.whiteTile} id="a4"></div>
        <div className={styles.blackTile} id="a3"></div>
        <div className={styles.whiteTile} id="a2">
          <Pawn></Pawn>
        </div>
        <div className={styles.blackTile} id="a1"></div>
      </div>
      <div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
      </div>
      <div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
      </div>
      <div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
      </div>
      <div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
      </div>
      <div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
      </div>
      <div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
      </div>
      <div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
        <div className={styles.blackTile}></div>
        <div className={styles.whiteTile}></div>
      </div>
    </div>
  )
}

export default Board
