import '../stylesheets/bottom.scss'
import { FaCode, FaReact } from 'react-icons/fa'
import { FcIdea } from 'react-icons/fc'

function Bottom() {
  return (
    <div id="bottom">
      <div className="keyTips">
        <div className="key">tab</div>
        <span> - restart test</span>
      </div>
      <div className="footer">
        <a href="https://github.com/JeremyDudet/typing-pactice-app">
          <FaCode />
          <span>GitHub</span>
        </a>
        <a href="https://www.monkeytype.com">
          <FaReact />
          <span>React project inspired by the great Monkeytype</span>
        </a>
      </div>
    </div>
  )
}

export default Bottom
