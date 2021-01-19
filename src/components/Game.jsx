import React, {useState} from 'react'
import styles from '@booty/styles/Game.module.scss'

const Game = () => {

  const [failed, setFailed] = useState(false)
  const [won, setWon] = useState(false)
  const [questions, setQuestions] = useState([
    {id: 0, answer: '123', guess: ''},
    {id: 1, answer: '456', guess: ''},
    {id: 2, answer: '789', guess: ''},
  ])

  const check = () => {
    let isCorrect = questions.reduce((sum, next) => sum && (next.guess === next.answer), true)
    if (isCorrect) {
      setWon(isCorrect)
    } else {
      setFailed(!isCorrect)
    }
  }

  const resetQuestion = (question) => {
    question.guess = ''
    return question
  }

  const reset = () => {
    setQuestions(questions.map(resetQuestion))
  }

  const set = (id, event) => {
    setQuestions(questions.map(question => {
      if(question.id === id) {
        question.guess = event.target.value
      }
      return question
    }))
  }

  const again = () => {
    setFailed(false)
  }

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      check()
    }
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
          <input className={styles.hidden} type={'hidden'} value={''} onChange={reset}/>
          <input className={styles.hidden} type={'hidden'} value={''} onChange={reset}/>
          <input className={styles.hidden} type={'hidden'} value={''} onChange={reset}/>
          <input type={'button'} value={"Noch mal?"} onClick={again}/>
        </div>
      )
    }
  }

  return (
    <div className={styles.game}>
      <label>Gib mir die richtigen Zahlen</label>
      <input type={'text'} onChange={event => set(0, event)} onKeyPress={keyPressed}/>
      <input type={'text'} onChange={event => set(1, event)} onKeyPress={keyPressed}/>
      <input type={'text'} onChange={event => set(2, event)} onKeyPress={keyPressed}/>
      <input type={'button'} value={"Let's Go"} onClick={check}/>
    </div>
  )
}

export default Game
