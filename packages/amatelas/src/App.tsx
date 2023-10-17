import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@okmtyuta/awesome-css/reset.css'
import { Heading, Frame } from '.'
import { Index } from './_pages'
import { ModalIndex } from './_pages/modal'
import { ModalOpen } from './_pages/modal/open'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Amatelas Experimental</Heading>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Index />} />
              <Route path="/modal" element={<ModalIndex />} />
              <Route path="/modal/open" element={<ModalOpen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Frame>
    </>
  )
}
