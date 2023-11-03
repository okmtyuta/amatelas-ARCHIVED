import '@okmtyuta/awesome-css/reset.css'

import { Frame, Heading, MaterialTextField } from './components/server'
import { Textfield } from './components/server/textfield/native/Textfield'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Amatelas Experimental</Heading>
        <Textfield
          validate
          required
          helper="これはヘルパーテキストです。"
          placeholder="placeholder"
          prefix="https://"
          suffix=".jp"
          variant="filled"
        />
        <Textfield
          validate
          required
          helper="これはヘルパーテキストです。"
          placeholder="placeholder"
          prefix="https://"
          suffix=".jp"
          variant="outlined"
        />
        <MaterialTextField
          validate
          required
          helper="これはヘルパーテキストです。"
          placeholder="placeholder"
          variant="standard"
        />
      </Frame>
    </>
  )
}
