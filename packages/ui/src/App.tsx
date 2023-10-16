import { Button, Frame, Heading } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { Flex } from './components/server/flex/Flex'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Link</Heading>

        <Flex>
          <Button width="xs">xsのボタンです</Button>
          <Button width="sm">smのボタンです</Button>
          <Button width="md">mdのボタンです</Button>
          <Button width="lg">lgのボタンです</Button>
          <Button width="xl">xlのボタンです</Button>
          <Button width="full">fullのボタンです</Button>
          <Button width="auto">autoのボタンです</Button>
        </Flex>
      </Frame>
    </>
  )
}
