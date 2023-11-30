import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import reset from '@okmtyuta/awesome-css/reset.css?inline'
import style from '@okmtyuta/amatelas-css/amatelas-material-textfield.css?inline'
import { getMaterialTextfieldPrefixed } from '@okmtyuta/_amatelas-theme/helper'
import { MaterialTextfieldVariant } from '@okmtyuta/_amatelas-theme/types'

export class AmatelasMaterialTextfield extends LitElement {
  @property()
  disabled?: boolean

  @property({ type: Boolean })
  required: boolean = false

  @property()
  placeholder?: string

  @property()
  helper?: string

  @property()
  type?: string

  @property()
  name?: string

  @property()
  value?: string

  @property()
  readonly?: boolean

  @property()
  variant?: MaterialTextfieldVariant

  @property()
  color = 'info'

  @property()
  width = 'auto'

  @property({ type: Boolean })
  validate = false

  render() {
    const prefixed = getMaterialTextfieldPrefixed(this.variant)
    return html`
      <div
        class=${clsx({
          [prefixed()]: true,
          [prefixed('validate')]: this.validate
        })}
      >
        <input
          class=${prefixed('input')}
          placeholder=" "
          type=${this.type}
          id=${this.id}
          type=${this.type}
          name=${this.name}
          value=${this.value}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
        />
        <label class=${prefixed('placeholder')}>
          ${this.required ? `${this.placeholder}*` : this.placeholder}
        </label>

        ${this.variant === 'outlined'
          ? html`<span class=${prefixed('placeholder-background')}>
              ${this.required ? `${this.placeholder}*` : this.placeholder}
            </span>`
          : null}
      </div>

      <div class=${prefixed('helper')}>
        ${this.helper
          ? html`<div class=${prefixed('helper-text')}>${this.helper}</div>`
          : null}
      </div>
    `
  }

  static styles = [unsafeCSS(reset), unsafeCSS(style)]
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-material-textfield': AmatelasMaterialTextfield
  }
}
