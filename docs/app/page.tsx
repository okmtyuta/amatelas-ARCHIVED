'use client'
import {
  Alert,
  Accordion,
  Button,
  Chip,
  Heading,
  Link,
  List,
  ListItem,
  Message
} from '@okmtyuta/amui'
import '@okmtyuta/amui/style.css'

const Page = () => {
  return (
    <>
      <Alert label="fajlfa">fadfjlfak</Alert>
      <Accordion summary="jfajajfl">fjalkfja</Accordion>
      <Button>submit</Button>
      <Chip>chip</Chip>
      <Heading>heading</Heading>
      <Link external> link</Link>
      <List>
        <ListItem>a</ListItem>
        <ListItem>b</ListItem>
      </List>
      <Message>warning</Message>
    </>
  )
}

export default Page
