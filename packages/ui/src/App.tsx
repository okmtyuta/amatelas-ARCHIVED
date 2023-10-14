import { Frame, List, ListItem } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
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
