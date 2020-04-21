import { LitElement, html, css } from 'lit-element';
import { vaadinTextFieldStyles } from './vaadin-text-field-styles.js';

class VaadinTextField2 extends LitElement {
  static get properties() { return {
    label: { type: String },
    value: { type: String },
    error: { type: String },
    required: { type: Boolean }
  };}

  constructor() {
    super();
    this.label = '';
    this.error = '';
    this.value = '';
    this.required = false;
  }

  static get styles() {
    return [vaadinTextFieldStyles, css``]
  }

  render() {
    return html`
        <label for="input">
          ${this.label}
          ${this.required ? html`<span>*</span>` : html``}
        </label>
        <div id="input-wrapper">
          <slot name="prefix"></slot>
          <input id="input" type="text" value="${this.value}">
          <slot name="suffix"></slot>
        </div>
        <span id="error" aria-live="polite">${this.error}</span>
    `;
  }

  firstUpdated() {
    var input = this.shadowRoot.querySelector('#input');

    if (this.required) {
      input.setAttribute('aria-required', 'true');
    } else {
      input.removeAttribute('aria-required');
    }

    input.addEventListener('focus', event => {
      this.setAttribute('focused', '');
    });

    input.addEventListener('blur', event => {
      this.removeAttribute('focused');
    });
  }
}
customElements.define('vaadin-text-field-2', VaadinTextField2);
