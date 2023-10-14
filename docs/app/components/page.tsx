import { Heading, List, ListItem } from '@okmtyuta/amatelas/server'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Heading>Components</Heading>
      <List>
        <ListItem>
          <Link href="/components/button">Button</Link>
        </ListItem>
        <ListItem>
          <Link href="/components/text-field">TextField</Link>
        </ListItem>
      </List>
    </>
  )
}

export default Page
