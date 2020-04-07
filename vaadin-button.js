import { LitElement, html, css } from 'lit-element';
import { vaadinButtonStyles } from './vaadin-button-styles.js';

class VaadinButton extends LitElement {
  static get properties() { return {
    label: { type: String }
  };}
  constructor() {
    super();
    this.label = '';
  }
  static get styles() {
    return [vaadinButtonStyles, css``]
  }
  render() {
    return html`
      <button id="button">
        <span part="prefix"><slot name="prefix"></slot></span>
        <span><slot></slot></span>
        <span part="suffix"><slot name="suffix"></slot></span>
      </button>
    `;
  }
  firstUpdated() {
    if (this.label != '') {
      this.shadowRoot.getElementById('button').setAttribute('aria-label', this.label);
    }
  }
}
customElements.define('vaadin-button', VaadinButton);
