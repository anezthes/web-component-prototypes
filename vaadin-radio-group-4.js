import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup4 extends LitElement {
  static get properties() { return {
    legend: { type: String }
  };}
  constructor() {
    super();
    this.legend = '';
  }
  static get styles() {
    return [vaadinRadioGroupStyles, css``]
  }
  render() {
    return html`
      <div role="radiogroup" aria-labelledby="legend">
        <label id="legend">${this.legend}</label>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('vaadin-radio-group-4', VaadinRadioGroup4);
