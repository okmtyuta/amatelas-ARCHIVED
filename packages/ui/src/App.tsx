import { Frame, Heading, Textarea } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Textarea</Heading>
        <Textarea variant="filled" placeholder="これはテキストエリアです" />
        <Textarea variant="standard" placeholder="これはテキストエリアです" />
        <Textarea variant="outlined" placeholder="これはテキストエリアです" />
      </Frame>
    </>
  )
}
