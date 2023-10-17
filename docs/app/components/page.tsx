import { Heading, List, ListItem } from '@okmtyuta/amatelas/server'
import Link from 'next/link'

const components = [
  { name: 'Button', url: 'button' },
  { name: 'TextField', url: 'text-field' },
  { name: 'Textarea', url: 'textarea' },
  { name: 'Modal', url: 'modal' }
]

const Page = () => {
  return (
    <>
      <Heading>Components</Heading>
      <List>
        {components.map((component) => {
          return (
            <ListItem key={component.name}>
              <Link href={`/components/${component.url}`}>
                {component.name}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default Page
