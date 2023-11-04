import '@okmtyuta/awesome-css/reset.css'

import { Frame } from './components/server'
import { Button } from './components/server/button/native/Button'

export const App = () => {
  return (
    <>
      <Frame>
        <Button color="info" variant="filled">
          BUTTON
        </Button>
        <Button color="warning" variant="outlined">
          BUTTON
        </Button>
        <Button color="danger" variant="standard">
          BUTTON
        </Button>
      </Frame>
    </>
  )
}
