import * as React from 'react'
import { FaKeyboard, FaInfo, FaUser } from 'react-icons/fa'
import { GiKeyboard } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import '../stylesheets/top.scss'

const Top = () => {
  const [selectedMode, setSelectedMode] = React.useState('standard') // standard | wikipedia | pokemon
  const [selectedTestType, setSelectedTestType] = React.useState('time') // time | words
  const [selectedDuration, setSelectedDuration] = React.useState('30') // time(in seconds): 15 30 60 120 |
  const [selectedWordCount, setSelectedWordCount] = React.useState('50') // words: 10 25 50 100

  const standardButton = React.useRef()
  const wikipediaButton = React.useRef()
  const pokemonButton = React.useRef()
  const timeButton = React.useRef()
  const wordsButton = React.useRef()

  const fifteenSeconds = React.useRef()
  const thritySeconds = React.useRef()
  const sixtySeconds = React.useRef()
  const oneHundredAndTwentySeconds = React.useRef()

  const tenWords = React.useRef()
  const twentyFiveWords = React.useRef()
  const fiftyWords = React.useRef()
  const oneHundredWords = React.useRef()
  const oneHundredAndFiftyWords = React.useRef()

  React.useEffect(() => {
    if (selectedMode === 'standard') {
      standardButton.current.className = 'text-button active'
      wikipediaButton.current.className = 'text-button'
      pokemonButton.current.className = 'text-button'
      if (selectedTestType === 'time') {
        timeButton.current.className = 'text-button active'
        wordsButton.current.className = 'text-button'
      } else {
        timeButton.current.className = 'text-button'
        wordsButton.current.className = 'text-button active'
      }
    } else if (selectedMode === 'wikipedia') {
      standardButton.current.className = 'text-button'
      wikipediaButton.current.className = 'text-button active'
      pokemonButton.current.className = 'text-button'
      setSelectedTestType('time')
      wordsButton.current.className = 'text-button disabled'
      timeButton.current.className = 'text-button active'
    } else if (selectedMode === 'pokemon') {
      standardButton.current.className = 'text-button'
      wikipediaButton.current.className = 'text-button'
      pokemonButton.current.className = 'text-button active'
      setSelectedTestType('words')
      timeButton.current.className = 'text-button disabled'
      wordsButton.current.className = 'text-button active'
    }

    console.log('Mode: ' + selectedMode)
    console.log('Test Type: ' + selectedTestType)
  }, [selectedMode, selectedTestType])

  React.useEffect(() => {
    if (selectedTestType === 'time') {
      if (selectedDuration === '15') {
        fifteenSeconds.current.className = 'text-button active'
        thritySeconds.current.className = 'text-button'
        sixtySeconds.current.className = 'text-button'
        oneHundredAndTwentySeconds.current.className = 'text-button'
      } else if (selectedDuration === '30') {
        fifteenSeconds.current.className = 'text-button'
        thritySeconds.current.className = 'text-button active'
        sixtySeconds.current.className = 'text-button'
        oneHundredAndTwentySeconds.current.className = 'text-button'
      } else if (selectedDuration === '60') {
        fifteenSeconds.current.className = 'text-button'
        thritySeconds.current.className = 'text-button'
        sixtySeconds.current.className = 'text-button active'
        oneHundredAndTwentySeconds.current.className = 'text-button'
      } else if (selectedDuration === '120') {
        fifteenSeconds.current.className = 'text-button'
        thritySeconds.current.className = 'text-button'
        sixtySeconds.current.className = 'text-button'
        oneHundredAndTwentySeconds.current.className = 'text-button active'
      }
    } else {
      if (selectedWordCount === '10') {
        tenWords.current.className = 'text-button active'
        twentyFiveWords.current.className = 'text-button'
        fiftyWords.current.className = 'text-button'
        oneHundredWords.current.className = 'text-button'
        oneHundredAndFiftyWords.current.className = 'text-button'
      } else if (selectedWordCount === '25') {
        tenWords.current.className = 'text-button'
        twentyFiveWords.current.className = 'text-button active'
        fiftyWords.current.className = 'text-button'
        oneHundredWords.current.className = 'text-button'
        oneHundredAndFiftyWords.current.className = 'text-button'
      } else if (selectedWordCount === '50') {
        tenWords.current.className = 'text-button'
        twentyFiveWords.current.className = 'text-button'
        fiftyWords.current.className = 'text-button active'
        oneHundredWords.current.className = 'text-button'
        oneHundredAndFiftyWords.current.className = 'text-button'
      } else if (selectedWordCount === '100') {
        tenWords.current.className = 'text-button'
        twentyFiveWords.current.className = 'text-button'
        fiftyWords.current.className = 'text-button'
        oneHundredWords.current.className = 'text-button active'
        oneHundredAndFiftyWords.current.className = 'text-button'
      } else if (selectedWordCount === '150') {
        tenWords.current.className = 'text-button'
        twentyFiveWords.current.className = 'text-button'
        fiftyWords.current.className = 'text-button'
        oneHundredWords.current.className = 'text-button'
        oneHundredAndFiftyWords.current.className = 'text-button active'
      }
    }

    if (selectedTestType === 'time') {
      console.log('Duraction: ' + selectedDuration + ' seconds')
    } else {
      console.log('Word Count: ' + selectedWordCount + ' words')
    }
  }, [selectedTestType, selectedDuration, selectedWordCount])

  return (
    <div id="top">
      <div className="logo">
        <IconContext.Provider value={{ color: '#e2b714' }}>
          <div className="icon">
            <GiKeyboard />
          </div>
        </IconContext.Provider>
        <div className="text">
          <div className="top">keyboard</div>keydown
        </div>
      </div>
      <div className="menu">
        <div id="start-test-button" class="icon-button">
          <FaKeyboard />
        </div>
        <div id="start-test-button" class="icon-button">
          <FaInfo />
        </div>
        <div id="start-test-button" class="icon-button">
          <FaUser />
        </div>
      </div>
      <div class="config">
        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            paddingTop: '0.1rem'
          }}
        >
          <div className="group">
            <div className="buttons">
              <div
                tabIndex="2"
                onClick={event => setSelectedMode(event.target.innerText)}
                ref={standardButton}
              >
                standard
              </div>
            </div>
          </div>
          <div className="group">
            <div className="buttons">
              <div
                tabIndex="2"
                onClick={event => setSelectedMode(event.target.innerText)}
                ref={wikipediaButton}
              >
                wikipedia
              </div>
            </div>
          </div>
          <div className="group">
            <div className="buttons">
              <div
                tabIndex="2"
                onClick={event => setSelectedMode(event.target.innerText)}
                ref={pokemonButton}
              >
                pokemon
              </div>
            </div>
          </div>
        </div>
        <div className="group mode">
          <div className="buttons">
            <div
              tabIndex="2"
              mode="time"
              onClick={event => setSelectedTestType(event.target.innerText)}
              ref={timeButton}
            >
              time
            </div>
            <div
              tabIndex="2"
              mode="words"
              onClick={event => setSelectedTestType(event.target.innerText)}
              ref={wordsButton}
            >
              words
            </div>
          </div>
        </div>
        {selectedTestType === 'time' ? (
          <div className="group mode">
            <div className="buttons">
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedDuration(event.target.innerText)}
                ref={fifteenSeconds}
              >
                15
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedDuration(event.target.innerText)}
                ref={thritySeconds}
              >
                30
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedDuration(event.target.innerText)}
                ref={sixtySeconds}
              >
                60
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedDuration(event.target.innerText)}
                ref={oneHundredAndTwentySeconds}
              >
                120
              </div>
            </div>
          </div>
        ) : (
          <div className="group mode">
            <div className="buttons">
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedWordCount(event.target.innerText)}
                ref={tenWords}
              >
                10
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedWordCount(event.target.innerText)}
                ref={twentyFiveWords}
              >
                25
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedWordCount(event.target.innerText)}
                ref={fiftyWords}
              >
                50
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedWordCount(event.target.innerText)}
                ref={oneHundredWords}
              >
                100
              </div>
              <div
                className="text-button"
                tabIndex="2"
                onClick={event => setSelectedWordCount(event.target.innerText)}
                ref={oneHundredAndFiftyWords}
              >
                150
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Top
