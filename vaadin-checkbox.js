import { LitElement, html, css } from 'lit-element';
import { vaadinCheckboxStyles } from './vaadin-checkbox-styles.js';

class VaadinCheckbox extends LitElement {
  static get styles() {
    return [
      vaadinCheckboxStyles,
      css``
    ]
  }
  render() {
    return html`
      <label>
        <input type="checkbox">
        <span>
          <slot></slot>
        </span>
      </label>
    `;
  }
}
customElements.define('vaadin-checkbox', VaadinCheckbox);
