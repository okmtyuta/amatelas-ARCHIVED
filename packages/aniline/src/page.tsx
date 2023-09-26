import { Frame } from '@okmtyuta/amatelas'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

import '@okmtyuta/amatelas/style.css'

export const Page = () => {
  return (
    <>
      <Header />
      <Frame></Frame>
      <Footer />
    </>
  )
}
