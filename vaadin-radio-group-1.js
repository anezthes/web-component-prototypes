import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup1 extends LitElement {
  static get properties() { return {
    legend: { type: String },
    options: { type: Array }
  };}
  constructor() {
    super();
    this.legend = '';
    this.options = [];
  }
  static get styles() {
    return [
      vaadinRadioGroupStyles,
      css``
    ]
  }
  render() {
    return html`
      <fieldset>
        <legend>${this.legend}</legend>
        ${this.options.map(option => html`
          <label>
            <input type="radio" name="option">
            <span>${option}</span>
          </label>
        `)}
      </fieldset>
    `;
  }
}
customElements.define('vaadin-radio-group-1', VaadinRadioGroup1);
