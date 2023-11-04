import { AmatelasButton } from './components/button'
import { AmatelasHeading } from './components/heading'

const init = () => {
  customElements.define('amatelas-button', AmatelasButton)
  customElements.define('amatelas-heading', AmatelasHeading)
}

init()
