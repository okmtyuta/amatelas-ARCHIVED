import { ReactNode } from 'react'
import '@okmtyuta/amatelas/style.css'
import {
  Heading,
  List,
  ListItem,
  Paragraph,
  Typography,
  Blockquote,
  Message
  // Horizon,
} from '@okmtyuta/amatelas/server'

const h1 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h1">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const h2 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h2">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const h3 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h3">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const h4 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h4">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const h5 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h5">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const h6 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h6">
      <Typography fontFamily="sans-serif-jp">{children}</Typography>
    </Heading>
  )
}
const strong = ({ children }: { children: ReactNode }) => {
  return <Typography fontWeight="bold">{children}</Typography>
}
const em = ({ children }: { children: ReactNode }) => {
  return <Typography fontStyle="italic">{children}</Typography>
}
const p = ({ children }: { children: ReactNode }) => {
  return <Paragraph>{children}</Paragraph>
}
const ul = ({ children }: { children: ReactNode }) => {
  return <List>{children}</List>
}
const li = ({ children }: { children: ReactNode }) => {
  return <ListItem>{children}</ListItem>
}
const blockquote = ({ children }: { children: ReactNode }) => {
  return <Blockquote>{children}</Blockquote>
}

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  em,
  p,
  ul,
  li,
  blockquote
}
