import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import style from '@okmtyuta/amatelas-css/amatelas-button.css?inline'

// type Variant = 'standard' | 'outlined' | 'filled'
// type Color = 'danger' | 'info' | 'success' | 'warning'
// type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

// @customElement('amatelas-button')
export class AmatelasButton extends LitElement {
  @property()
  variant = 'outlined'

  @property()
  color = 'info'

  @property()
  width = 'auto'

  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <button
        class=${clsx('amatelas-button', this.variant, this.color, this.width)}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-button': AmatelasButton
  }
}
