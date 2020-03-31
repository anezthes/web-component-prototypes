import { LitElement, html, css } from 'lit-element';
import { vaadinRadioButtonStyles } from './vaadin-radio-button-styles.js';

class VaadinRadioButton1 extends LitElement {
  static get properties() { return {
    name: { type: String }
  };}
  constructor() {
    super();
    this.name = '';
  }
  static get styles() {
    return [vaadinRadioButtonStyles, css``]
  }
  render() {
    return html`
      <label>
        <input type="radio" name="${this.name}">
        <span>
          <slot></slot>
        </span>
      </label>
    `;
  }
}
customElements.define('vaadin-radio-button-1', VaadinRadioButton1);
