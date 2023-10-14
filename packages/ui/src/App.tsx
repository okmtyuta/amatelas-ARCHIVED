import { Heading, Frame, TextArea, List, ListItem } from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { TextField } from './components/server/text-field/TextFiled'

export const App = () => {
  return (
    <>
      <Frame className="frame">
        <Heading>Textfield</Heading>
        <TextField validate variant="filled" placeholder="placeholder" />
        <TextField validate variant="outlined" placeholder="placeholder" />
        <TextField
          validate
          pattern="\d{3}-\d{4}"
          variant="standard"
          placeholder="placeholder"
          helper={
            <List>
              <ListItem>
                郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。郵便番号を入力してください。
              </ListItem>
              <ListItem marker="done">郵便番号を入力してください。</ListItem>
              <ListItem marker="dangerous">
                郵便番号を入力してください。
              </ListItem>
            </List>
          }
          required
        />

        <Heading>Textarea</Heading>
        <TextArea placeholder="outlined" variant="outlined" />
        <TextArea placeholder="standard" variant="standard" />
        <TextArea placeholder="filled" variant="filled" />
      </Frame>
    </>
  )
}
