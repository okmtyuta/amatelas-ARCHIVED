import { Frame } from '@okmtyuta/amatelas'
import { Markdown } from '.'

import '@okmtyuta/amatelas/style.css'

const mkd = String.raw`

>  Highlights information that users should take into account, even when skimming.

# Head
`

export const App = () => {
  return (
    <Frame>
      <Markdown>{mkd}</Markdown>
    </Frame>
  )
}
