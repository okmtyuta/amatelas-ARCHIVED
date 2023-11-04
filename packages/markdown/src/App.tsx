import { Frame } from '@okmtyuta/amatelas/server'

import '@okmtyuta/amatelas-react/style.css'
import { MarkdownTextarea } from './components/markdown-textarea/MarkdownTextarea'
import './reset.css'

export const App = () => {
  return (
    <Frame>
      <MarkdownTextarea />
    </Frame>
  )
}
