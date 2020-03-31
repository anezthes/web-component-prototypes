import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup3 extends LitElement {
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
      <fieldset>
        <legend>${this.legend}</legend>
        <slot></slot>
      </fieldset>
    `;
  }
}
customElements.define('vaadin-radio-group-3', VaadinRadioGroup3);
