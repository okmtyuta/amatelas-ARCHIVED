import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import {
  Blockquote,
  Heading,
  List,
  ListItem,
  Paragraph,
  Typography
} from '@okmtyuta/amatelas/server'

export const Markdown = ({ children }: { children?: string }) => {
  if (!children) {
    return <></>
  }
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1(props) {
          return (
            <Heading as="h1">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },

        h2(props) {
          return (
            <Heading as="h2">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },
        h3(props) {
          return (
            <Heading as="h3">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },
        h4(props) {
          return (
            <Heading as="h4">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },
        h5(props) {
          return (
            <Heading as="h5">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },
        h6(props) {
          return (
            <Heading as="h6">
              <Typography fontFamily="sans-serif-jp">
                {props.children}
              </Typography>
            </Heading>
          )
        },
        strong(props) {
          return <Typography fontWeight="bold">{props.children}</Typography>
        },
        em(props) {
          return <Typography fontStyle="italic">{props.children}</Typography>
        },
        p(props) {
          return <Paragraph>{props.children}</Paragraph>
        },
        ul(props) {
          return <List>{props.children}</List>
        },
        li(props) {
          return <ListItem>{props.children}</ListItem>
        },
        blockquote(props) {
          return <Blockquote>{props.children}</Blockquote>
        }
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
