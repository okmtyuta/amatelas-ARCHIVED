'use client'
import {
  Heading,
  Paragraph,
  Link,
  Space,
  List,
  ListItem,
  Fixed
} from '@okmtyuta/amatelas/server'
import { ClientAlert } from '@okmtyuta/amatelas'
import 'katex/dist/katex.min.css'

const Page = () => {
  return (
    <>
      <Fixed positionalMargin={{ x: 'none' }}>
        <ClientAlert label="NEW COMPONENT">
          The most remarkable feature of this library is almost all of
          components are prepared for both of server and client. Server
          components are styled only with css. Hence, they can be used for
          Server-Side-Rendering. On the other hands, client components are
          created with CSS-in-JS, then they have dynamic animation.
        </ClientAlert>
      </Fixed>
      <Heading>Overview</Heading>
      <Paragraph>
        AmatelasUI is a component library to build the personal pages of
        <Space />
        <Link underlined href="https://blog.me.okmtyuta.jp">
          @okmtyuta
        </Link>
        .
      </Paragraph>

      <Paragraph>
        The most remarkable feature of this library is almost all of components
        are prepared for both of server and client. Server components are styled
        only with css. Hence, they can be used for Server-Side-Rendering. On the
        other hands, client components are created with CSS-in-JS, then they
        have dynamic animation.
      </Paragraph>

      <Paragraph>
        <Link underlined href="https://storybook.amatelas.dev">
          Storybook components catalog
        </Link>
      </Paragraph>

      <Heading>Roadmap</Heading>
      <List>
        <ListItem>Create more useful components</ListItem>
        <ListItem>More document</ListItem>
        <ListItem>More anatomy</ListItem>
      </List>
    </>
  )
}

export default Page
