import { LitElement, html, unsafeCSS } from 'lit'
import clsx from 'clsx'

import '@theme/css/font/font-size.css'
import style from './amatelas-heading.css?inline'

// @customElement('amatelas-heading')
export class AmatelasHeading extends LitElement {
  render() {
    return html`
      <h1 {...props} class=${clsx('amatelas-heading', 'h1')}><slot></slot></h1>
    `
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-heading': AmatelasHeading
  }
}
