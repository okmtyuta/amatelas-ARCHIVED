import '@okmtyuta/awesome-css/reset.css'

import { Alert, Frame } from './components/server'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame>
        <Alert variant="info" summary="ALERT">
          {demoText.en.short}
        </Alert>
        <Alert variant="warning" summary="ALERT">
          {demoText.en.short}
        </Alert>
        <Alert variant="danger" summary="ALERT">
          {demoText.en.short}
        </Alert>
        <Alert variant="success" summary="ALERT">
          {demoText.en.short}
        </Alert>
      </Frame>
    </>
  )
}
