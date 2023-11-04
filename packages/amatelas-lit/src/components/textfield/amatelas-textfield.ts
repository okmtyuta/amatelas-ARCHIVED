import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import clsx from 'clsx'

import style from './amatelas-textfiled.css?inline'

const validate = true
const required = true
const placeholder = 'placeholder'

@customElement('amatelas-textfield')
export class AmatelasTextfiled extends LitElement {
  render() {
    return html`
      <div
        class=${clsx({
          'text-field': true,
          validate: validate
        })}
      >
        <input class="input" placeholder=" " type="text" />
        <label class="placeholder">
          ${required ? `${placeholder}*` : placeholder}
        </label>
      </div>
    `
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-textfield': AmatelasTextfiled
  }
}
