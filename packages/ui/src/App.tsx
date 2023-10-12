import { Heading, Frame, TextArea, List, ListItem } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'

export const App = () => {
  return (
    <>
      <Frame>
        <Heading>Textarea</Heading>
        <TextArea variant="standard" />

        <List>
          <ListItem marker="dangerous">今日は何もしませんでした。</ListItem>
          <ListItem marker="done">on marker</ListItem>
        </List>
      </Frame>
    </>
  )
}
