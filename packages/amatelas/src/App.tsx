import '@okmtyuta/awesome-css/reset.css'
import { Heading, Frame, Button } from '.'
import { ControlledAlert } from './components/controlled/alert'
import { demoText } from './demo-text'
import { useState } from 'react'

export const App = () => {
  const [errorClose, setErrorClose] = useState(false)
  return (
    <>
      <Frame className="frame">
        <Heading>Amatelas Experimental</Heading>
        <ControlledAlert summary="DEMO">{demoText.en.long}</ControlledAlert>
        <ControlledAlert
          onDelete={() => {
            setErrorClose(true)
          }}
          close={errorClose}
          variant="error"
          summary="DEMO"
        >
          {demoText.en.long}
        </ControlledAlert>
        <Button
          color="danger"
          onClick={() => {
            setErrorClose(false)
          }}
        >
          OPEN ERROR
        </Button>
      </Frame>
    </>
  )
}
