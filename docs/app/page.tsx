import {
  Heading,
  Paragraph,
  Link,
  Space,
  List,
  ListItem
} from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <Paragraph>
        AmatelasUI is a component library to build the personal pages of
        <Space />
        <Link underline href="https://blog.me.okmtyuta.jp">
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
        <Link underline href="https://storybook.amatelas.dev">
          Storybook components catalog
        </Link>
      </Paragraph>

      <Paragraph>
        <Link underline href="/components">
          Components Docs
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
