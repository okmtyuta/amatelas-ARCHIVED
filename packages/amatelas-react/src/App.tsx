import '@okmtyuta/awesome-css/reset.css'

import { Frame, Button } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
        <Button variant="filled">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="standard">Button</Button>
      </Frame>
    </>
  )
}
