import { LitElement, html, unsafeCSS } from 'lit'
import clsx from 'clsx'

import '@okmtyuta/amatelas-theme/font.css'
import style from './amatelas-heading.css?inline'
import { property } from 'lit/decorators.js'

// @customElement('amatelas-heading')
export class AmatelasHeading extends LitElement {
  @property()
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'

  render() {
    switch (this.as) {
      case 'h1':
        return html`
          <h1 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h1>
        `
      case 'h2':
        return html`
          <h2 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h2>
        `
      case 'h3':
        return html`
          <h3 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h3>
        `
      case 'h4':
        return html`
          <h4 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h4>
        `
      case 'h5':
        return html`
          <h5 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h5>
        `
      case 'h6':
        return html`
          <h6 class=${clsx('amatelas-heading', this.as)}>
            <slot></slot>
          </h6>
        `
    }
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-heading': AmatelasHeading
  }
}
