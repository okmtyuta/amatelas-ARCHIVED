import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import reset from '@okmtyuta/awesome-css/reset.css?inline'
import style from '@okmtyuta/amatelas-css/amatelas-button.css?inline'
import { getButtonPrefixed } from '@okmtyuta/_amatelas-theme/helper'
import { ButtonVariant } from '@okmtyuta/_amatelas-theme/types'

export class AmatelasButton extends LitElement {
  @property()
  variant?: ButtonVariant

  @property()
  color = 'info'

  @property()
  width = 'auto'

  @property({ type: Boolean })
  disabled = false

  render() {
    const prefixed = getButtonPrefixed(this.variant)
    return html`
      <button
        class=${clsx(prefixed(), prefixed(this.color), prefixed(this.width))}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `
  }

  static styles = [unsafeCSS(style), unsafeCSS(reset)]
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-button': AmatelasButton
  }
}
