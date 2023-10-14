import { Heading, Frame, TextArea, List, ListItem } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { TextField } from './components/server/text-field/TextFiled'
import { DiscSVG } from './svg'
import { MarkerListItem } from './components/server/list'
import { demoText } from './demo-text'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <List>
          <ListItem>{demoText.en.long}</ListItem>
          <ListItem marker="done">
            基礎的な要素を表現するために使われます。
          </ListItem>
        </List>
      </Frame>
    </>
  )
}
