import { AmatelasBlockquote } from './components/blockquote'
import { AmatelasButton } from './components/button'
import { AmatelasHeading } from './components/heading'
import { AmatelasMaterialTextfield } from './components/textfield/material/amatelas-material-textfield'

const init = () => {
  customElements.define('amatelas-blockquote', AmatelasBlockquote)
  customElements.define('amatelas-button', AmatelasButton)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define(
    'amatelas-material-textfield',
    AmatelasMaterialTextfield
  )
}

init()
