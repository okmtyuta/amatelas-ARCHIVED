import { Frame, Heading, Textarea } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { Flex } from './components/server/flex/Flex'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Link</Heading>

        <Flex>
          <Textarea placeholder="standard" variant="standard" />
          <Textarea
            defaultValue={demoText.ja.long}
            placeholder="filled"
            variant="filled"
          />
          <Textarea placeholder="outlined" variant="outlined" />
        </Flex>
      </Frame>
    </>
  )
}
