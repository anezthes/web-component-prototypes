import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup5 extends LitElement {
  static get styles() {
    return [vaadinRadioGroupStyles, css`
      :host {
        display: inline-flex;
        flex-direction: column;
      }
      `
    ]
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
}
customElements.define('vaadin-radio-group-5', VaadinRadioGroup5);
