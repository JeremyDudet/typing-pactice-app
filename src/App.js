import * as React from 'react'
import { words } from './data/static/words_x200.json'
import Layout from './components/Layout'
import Top from './components/Top'
import Middle from './components/Middle'
import Bottom from './components/Bottom'

function App() {
  const wordsArray = words
  const randomSortedWords = wordsArray.sort(() => Math.random() - 0.5) // returns a random number in the domain of [-0.5, 0.5)
  const [selectedMode, setSelectedMode] = React.useState('standard') // 'standard' | 'wikipedia' | 'pokemon'
  const [selectedTestType, setSelectedTestType] = React.useState('time') // 'time' | 'words'
  const [selectedTimeLimit, setSelectedTimeLimit] = React.useState('30') // '15' | '30' | '60' | '120' (seconds)
  const [selectedWordCount, setSelectedWordCount] = React.useState('50') // '10' | '25' | '50' | '100'

  const [typedWord, setTimer] = React.useState()

  return (
    <Layout>
      <Top
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        selectedTestType={selectedTestType}
        setSelectedTestType={setSelectedTestType}
        selectedTimeLimit={selectedTimeLimit}
        setSelectedTimeLimit={setSelectedTimeLimit}
        selectedWordCount={selectedWordCount}
        setSelectedWordCount={setSelectedWordCount}
      />
      <Middle words={randomSortedWords} />
      <Bottom />
    </Layout>
  )
}

export default App
