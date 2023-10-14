import { Heading, List, ListItem, TextField } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <TextField validate variant="filled" placeholder="placeholder" />
      <TextField validate variant="outlined" placeholder="placeholder" />
      <TextField
        validate
        pattern="\d{3}-\d{4}"
        variant="standard"
        placeholder="placeholder"
        helper={
          <List>
            <ListItem>郵便番号を入力してください。</ListItem>
            <ListItem marker="done">郵便番号を入力してください。</ListItem>
            <ListItem marker="dangerous">郵便番号を入力してください。</ListItem>
          </List>
        }
        required
      />
    </>
  )
}

export default Page
