import { LitElement, html, unsafeCSS } from 'lit'

import '@okmtyuta/amatelas-theme/color.css'
import style from './amatelas-blockquote.css?inline'

// @customElement('amatelas-blockquote')
export class AmatelasBlockquote extends LitElement {
  render() {
    return html` <blockquote class="blockquote"><slot></slot></blockquote> `
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-blockquote': AmatelasBlockquote
  }
}
