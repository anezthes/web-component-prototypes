import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup extends LitElement {
  static get properties() { return {
    legend: { type: String },
    options: { type: Number }
  };}
  constructor() {
    super();
    this.legend = '';
    this.options = 0;
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
        ${this.options.forEach((option, i) => html`
          <label>
            <input type="radio" name="option">
            <slot name="option-${i}"></slot>
          </label>
        `)}
      </fieldset>
    `;
  }
  firstUpdated() {
    _options = 
  }
}
customElements.define('vaadin-radio-group-2', VaadinRadioGroup2);
