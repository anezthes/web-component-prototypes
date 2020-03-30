import {LitElement, html, css, property} from 'lit-element';
import {vaadinRadioGroupStyles} from './vaadin-radio-group-styles.js';

class VaadinRadioGroup2 extends LitElement {
  static get properties() {
    return {
      legend: {type: String},
      options: {type: Number},
      optionIndexes: {type: Array}
    };
  }
  constructor() {
    super();
    this.name = '';
    this.legend = '';
    this.options = 0;
    this.optionIndexes = [];
  }
  static get styles() {
    return [vaadinRadioGroupStyles, css``];
  }
  render() {
    return html`
      <fieldset>
        <legend>${this.legend}</legend>
        ${this.optionIndexes.map(
          (i) => html`
            <label>
              <input type="radio" name=${this.name} />
              <span>
                <slot name="option-${i + 1}"></slot>
              </span>
            </label>
          `
        )}
      </fieldset>
    `;
  }

  updated(props) {
    props.forEach((_, name) => {
      if (name === 'options') {
        const optionIndexes = [];
        for (let i = 0; i < this.options; i++) optionIndexes.push(i);
        this.optionIndexes = optionIndexes;
      }
    });
  }
}
customElements.define('vaadin-radio-group-2', VaadinRadioGroup2);
