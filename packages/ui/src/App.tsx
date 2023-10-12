import {
  Heading,
  Frame,
  TextArea,
  List,
  ListItem,
  Typography,
  Alert
} from './index'
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

        <List>
          <ListItem>: October 2023 - C</ListItem>

          <ListItem>
            <Typography color="danger" fontWeight="bold">
              PKSHA Technology, Inc.
            </Typography>
            : October 2023 - Current, Software Engineer, Internship
          </ListItem>

          <ListItem marker="done">
            <Typography color="danger" fontWeight="bold">
              PKSHA Technology, Inc.
            </Typography>
            : October 2023 - Current, Software Engineer, Internship : October
            2023 - Current, Software Engineer, Internship : October 2023 -
            Current, Software Engineer, Internship
          </ListItem>

          <ListItem marker="dangerous">
            <Typography color="danger" fontWeight="bold">
              PKSHA Technology, Inc.
            </Typography>
            : October 2023 - Current, Software Engineer, Internship
          </ListItem>
        </List>

        <Alert summary="alllll l l l l     l l l l l ll l l     l l l l l ll l l     l l l l l l l l l l l l"></Alert>
      </Frame>
    </>
  )
}
