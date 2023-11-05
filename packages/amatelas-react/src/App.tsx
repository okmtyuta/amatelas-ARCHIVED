import '@okmtyuta/awesome-css/reset.css'

import { Checkbox, Frame, List, ListItem, Snack } from './components/server'
import { Button } from './components/server/button/native/Button'
import { MaterialChip } from './components/server/chip/material/MaterialChip'
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
