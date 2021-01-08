import React, {useState} from 'react'
import styles from '@booty/styles/Game.module.scss'

const Game = () => {

  const [failed, setFailed] = useState(false)
  const [answer, setAnswer] = useState('')
  const [won, setWon] = useState(false)

  const checkAnswer = () => {
    if (answer === '123') {
      setWon(true)
    } else {
      setFailed(true)
    }
  }

  const doAgain = () => {
    setFailed(false)
    setAnswer('')
  }

  if (won) {
    return (
      <div className={styles.game}>
        <p>Die Antwort ist richtig, du hast gewonen!</p>
      </div>
    )
  }

  if (failed) {
    {
      return (
        <div className={styles.game}>
          <p>Schade, leider falsch.</p>
          <input className={styles.hidden} type={'hidden'} value={''} onChange={event => setAnswer(event.target.value)}/>
          <input type={'button'} value={"Noch mal?"} onClick={doAgain}/>
        </div>
      )
    }
  }

  return (
    <div className={styles.game}>
      <label>Gib mir die richtige Zahl</label>
      <input type={'text'} onChange={event => setAnswer(event.target.value)} onSubmit={checkAnswer}/>
      <input type={'button'} value={"Let's Go"} onClick={checkAnswer}/>
    </div>
  )
}

export default Game
