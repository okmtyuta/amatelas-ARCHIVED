import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import clsx from 'clsx'

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

  static styles = css`
    .text-field {
      position: relative;
      height: 52px;
      margin-top: 4px;
    }
    .text-field::after {
      border-bottom: 1px solid #17a2b8;
      left: 0px;
      bottom: 0px;
      content: '';
      position: absolute;
      right: 0px;
      transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      pointer-events: none;
    }
    .text-field:has(.input:focus)::after {
      transform: scaleX(1);
    }
    .text-field:not(:has(.input:focus))::after {
      transform: scaleX(0);
    }

    .placeholder {
      position: absolute;
      transform-origin: 0;
      margin: 0 12px;
      transition: all 0.3s;
      pointer-events: none;
      color: #888;

      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
    }
    .input {
      position: absolute;
      bottom: 0;
      padding: 13px 12px 0 12px;
      width: 100%;
      height: 100%;
      z-index: 0;
      border-bottom: #888 solid 1px;
    }
    .input:focus + .placeholder,
    .input:not(:placeholder-shown) + .placeholder {
      transform: scale(0.8);
      top: -2px;
      transition: all 0.3s;
      pointer-events: none;
    }
    .input:not(:placeholder-shown):not(:focus) + .placeholder {
      color: #888;
    }
    .input:focus + .placeholder {
      color: #17a2b8;
    }

    .validate > .input:invalid {
      border-bottom: #dc3545 solid 1px;
      z-index: 10;
    }
    .validate > .input:invalid + .placeholder {
      color: #dc3545;
    }

    .helper-text {
      color: #666;
      padding: 4px 12px;
      // @include use-caption-font-size();
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-textfield': AmatelasTextfiled
  }
}
