import '@okmtyuta/awesome-css/reset.css'
import { Heading, Frame, Alert } from '.'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Amatelas Experimental</Heading>
        <Alert summary="ralebl">fjaljfalkjfakl</Alert>
        <Alert summary="ralebl" variant="warning">
          fjaljfalkjfakl
        </Alert>
      </Frame>
    </>
  )
}
