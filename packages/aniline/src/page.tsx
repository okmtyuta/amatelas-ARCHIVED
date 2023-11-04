import { Frame } from '@okmtyuta/amatelas-react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

import '@okmtyuta/amatelas-react/style.css'
import { Typing } from './components'

export const Page = () => {
  return (
    <>
      <Header />
      <Frame>
        <Typing>
          Create user interfaces from components React lets you build user
          interfaces out of individual pieces called components. Create your own
          React components like Thumbnail, LikeButton, and Video. Then combine
          them into entire screens, pages, and apps.
        </Typing>
      </Frame>
      <Footer />
    </>
  )
}
