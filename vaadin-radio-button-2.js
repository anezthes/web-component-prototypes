import { LitElement, html, css } from 'lit-element';
import { vaadinRadioButtonStyles } from './vaadin-radio-button-styles.js';

class VaadinRadioButton2 extends LitElement {
  static get styles() {
    return [vaadinRadioButtonStyles, css``]
  }
  render() {
    return html`
      <div id="focusElement" aria-checked="false" role="radio" tabindex="-1">
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }
  setTabIndex(value) {
    this.shadowRoot.getElementById('focusElement').tabIndex = value;
  }
  getTabIndex() {
    return this.shadowRoot.getElementById('focusElement').tabIndex;
  }
  focus() {
    this.shadowRoot.getElementById('focusElement').focus();
  }
}
customElements.define('vaadin-radio-button-2', VaadinRadioButton2);
