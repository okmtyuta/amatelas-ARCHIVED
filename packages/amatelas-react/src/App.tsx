import '@okmtyuta/awesome-css/reset.css'

import { Frame, Snack } from './components/server'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame>
        <Snack>{demoText.en.short}</Snack>
      </Frame>
    </>
  )
}
