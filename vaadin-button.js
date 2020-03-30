import { LitElement, html, css } from 'lit-element';
import { vaadinButtonStyles } from './vaadin-button-styles.js';

class VaadinButton extends LitElement {
  static get styles() {
    return [vaadinButtonStyles, css``]
  }
  render() {
    return html`
      <button>
        <span part="prefix"><slot name="prefix"></slot></span>
        <span><slot></slot></span>
        <span part="suffix"><slot name="suffix"></slot></span>
      </button>
    `;
  }
}
customElements.define('vaadin-button', VaadinButton);
