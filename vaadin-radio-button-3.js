import { LitElement, html, css } from 'lit-element';
import { vaadinRadioButtonStyles } from './vaadin-radio-button-styles.js';

class VaadinRadioButton3 extends LitElement {
  static get styles() {
    return [vaadinRadioButtonStyles, css``]
  }
  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }
}
customElements.define('vaadin-radio-button-3', VaadinRadioButton3);
