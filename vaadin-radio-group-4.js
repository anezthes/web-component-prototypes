import { LitElement, html, css, property } from 'lit-element';
import { vaadinRadioGroupStyles } from './vaadin-radio-group-styles.js';

class VaadinRadioGroup4 extends LitElement {
  static get properties() { return {
    legend: { type: String },
    items: { type: Array }
  };}

  constructor() {
    super();
    this.legend = '';
    this.items = [];
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

  firstUpdated() {
    this.filterItems();

    this.shadowRoot.querySelector('slot').addEventListener('slotchange', event => {
      this.children[0].setTabIndex(0);
    });

    this.addEventListener('click', event => {
      const option = event.target.closest('vaadin-radio-button')
      if (!option) {
        return;
      }
      option.focus()
    });

    this.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
        return;
      }
      event.preventDefault();
      const option = event.target;

      let selectedOption;
      if (event.key === 'ArrowDown') {
        selectedOption = this.items[(this.items.findIndex((item) => item.getTabIndex() == 0) + 1)];
      } else {
        selectedOption = this.items[(this.items.findIndex((item) => item.getTabIndex() == 0) - 1)];
      }

      if (selectedOption) {
        selectedOption.focus();
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].setTabIndex(-1);
        }
        selectedOption.setTabIndex(0);
      }
    });
  }

  filterItems() {
    this.items = [];
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].tagName.toLowerCase() == 'vaadin-radio-button-2') {
        this.items.push(this.children[i]);
      }
    }
  }
}
customElements.define('vaadin-radio-group-4', VaadinRadioGroup4);
