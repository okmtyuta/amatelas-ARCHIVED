import '@okmtyuta/awesome-css/reset.css'

import { Accordion, Frame } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
        <Accordion summary="accordion">Hello</Accordion>
      </Frame>
    </>
  )
}
