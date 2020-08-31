import { css, customElement, html, LitElement } from 'lit-element';

@customElement('jarmee-button')
export class FoxButton extends LitElement {
  static styles = css`
    button.jarmee-button {
      outline: none;
      background: transparent;
      border-style: none;
      border: 1px solid var(--jarmee-button-color);
      height: 36px;
      padding: 0px 16px;
      border-radius: 4px;
      color: var(--jarmee-button-color);
    }
  `;

  render() {
    return html` <button class="jarmee-button">
      <slot></slot>
    </button>`;
  }
}
