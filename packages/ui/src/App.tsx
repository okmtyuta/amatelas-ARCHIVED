import {
  Heading,
  Frame,
  TextArea,
  List,
  ListItem,
  Typography,
  Alert,
  Button,
  Progress
} from './index'
import '@okmtyuta/awesome-css/reset.css'
import './app.css'
import { useState } from 'react'

const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Frame>
        <Heading>Textarea</Heading>
        <TextArea variant="standard" />

        <List>
          <ListItem marker="dangerous">今日は何もしませんでした。</ListItem>
          <ListItem marker="done">on marker</ListItem>
        </List>

        <Button
          variant="standard"
          onClick={async () => {
            setLoading(true)
            await _sleep(1000)
            setLoading(false)
          }}
          loading={loading}
          disabled={loading}
          color="info"
          spinner={<Progress size="xs" color="white" />}
        >
          SUBMIT
        </Button>
        <Button
          variant="filled"
          onClick={async () => {
            setLoading(true)
            await _sleep(1000)
            setLoading(false)
          }}
          loading={loading}
          disabled={loading}
          color="info"
          spinner={<Progress size="xs" color="white" />}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          onClick={async () => {
            setLoading(true)
            await _sleep(1000)
            setLoading(false)
          }}
          loading={loading}
          disabled={loading}
          color="info"
          spinner={<Progress size="xs" color="white" />}
        >
          SUBMIT
        </Button>

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
