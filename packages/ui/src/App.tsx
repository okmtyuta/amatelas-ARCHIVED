import { Frame, Heading, Link, Paragraph } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Link</Heading>
        <Paragraph>
          {demoText.ja.long}続きは
          <Link color="info" external href="#">
            詳細ページ
          </Link>
          から。{demoText.ja.long}
        </Paragraph>
      </Frame>
    </>
  )
}
