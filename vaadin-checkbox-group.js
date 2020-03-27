import { LitElement, html, css, property } from 'lit-element';
import { vaadinCheckboxGroupStyles } from './vaadin-checkbox-group-styles.js';

class VaadinCheckboxGroup extends LitElement {
  static get properties() { return {
    legend: { type: String }
  };}
  constructor() {
    super();
    this.legend = '';
  }
  static get styles() {
    return [
      vaadinCheckboxGroupStyles,
      css``
    ]
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
customElements.define('vaadin-checkbox-group', VaadinCheckboxGroup);
