import { LitElement, html, css } from 'lit-element';
import { vaadinRadioButtonStyles } from './vaadin-radio-button-styles.js';

class VaadinRadioButton2 extends LitElement {
  static get styles() {
    return [vaadinRadioButtonStyles, css``]
  }
  render() {
    return html`
      <div aria-checked="false" role="radio" tabindex="0">
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }
}
customElements.define('vaadin-radio-button-2', VaadinRadioButton2);
