import { Heading, Frame, TextArea } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { TextField } from './components/server/text-field/TextFiled'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Textfield</Heading>
        <TextField variant="outlined" placeholder="placeholder" />

        <Heading>Textarea</Heading>
        <TextArea placeholder="outlined" variant="outlined" />
        <TextArea placeholder="standard" variant="standard" />
        <TextArea placeholder="filled" variant="filled" />
      </Frame>
    </>
  )
}
