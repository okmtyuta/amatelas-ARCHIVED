import { Heading, Frame, TextArea } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'

export const App = () => {
  return (
    <>
      <Frame>
        <Heading>Textarea</Heading>
        <TextArea variant="standard" />
      </Frame>
    </>
  )
}
