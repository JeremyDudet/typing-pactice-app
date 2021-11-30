import '../stylesheets/middle.scss'

function Middle({ words }) {
  return (
    <div id="middle">
      <div className="pageTest">
        <div className="page pageTest active">
          <div id="typingTest">
            <div
              id="testModesNotice"
              style={{ transition: 'all 0.125s ease 0s', opacity: '1' }}
            ></div>
            <div
              id="wordsWrapper"
              style={{ height: '117.083px', overflow: 'hidden' }}
            >
              <div
                id="paceCaret"
                className="hidden size15 default"
                style={{ top: '-39.0133px' }}
              ></div>
              <div
                id="caret"
                className="size15 default hidden"
                style={{
                  animationName: 'caretFlashSmooth',
                  top: '1px',
                  left: '5px',
                  opacity: '1'
                }}
              ></div>
              <div
                id="words"
                className="size15"
                style={{
                  height: '156.053px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease 0s'
                }}
              >
                {words.map(word => (
                  <div className="word">
                    {[...word].map(letter => (
                      <div className="letter">{letter}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
