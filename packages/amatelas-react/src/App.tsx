import '@okmtyuta/awesome-css/reset.css'

import { Blockquote, Frame } from './components/server'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame>
        <Blockquote>{demoText.en.long}</Blockquote>
      </Frame>
    </>
  )
}
