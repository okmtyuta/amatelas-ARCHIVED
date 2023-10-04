import { Heading, Frame, TextArea } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'

export const App = () => {
  return (
    <>
      <Frame>
        <Heading>Textarea</Heading>
        <TextArea variant="standard" placeholder="placeholder" />
        <TextArea variant="filled" />
        <TextArea variant="outlined" placeholder="placeholder" />
      </Frame>
    </>
  )
}
