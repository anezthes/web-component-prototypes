import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup2 extends LitElement {
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
        ${this.options.map((option, i) => html`
          <label>
            <input type="radio" name="option">
            <span>
              <slot name="option-${i + 1}"></slot>
            </span>
          </label>
        `)}
      </fieldset>
    `;
  }
}
customElements.define('vaadin-radio-group-2', VaadinRadioGroup2);
