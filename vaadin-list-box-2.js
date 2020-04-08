import { LitElement, html, css } from 'lit-element';
import { vaadinListBoxStyles } from './vaadin-list-box-styles.js';

class VaadinListBox2 extends LitElement {
  static get properties() { return {
    items: { type: Array }
  };}

  constructor() {
    super();
    this.items = [];
  }

  static get styles() {
    return [vaadinListBoxStyles, css``]
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    this.setAttribute('role', 'listbox');

    this.filterItems();

    this.shadowRoot.querySelector('slot').addEventListener('slotchange', event => {
      this.children[0].tabIndex = 0;
    });

    this.addEventListener('click', event => {
      const option = event.target.closest('vaadin-item-2')
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
        selectedOption = this.items[(this.items.findIndex((item) => item.tabIndex == 0) + 1)];
      } else {
        selectedOption = this.items[(this.items.findIndex((item) => item.tabIndex == 0) - 1)];
      }

      if (selectedOption) {
        selectedOption.focus();
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].tabIndex = -1;
        }
        selectedOption.tabIndex = 0;
      }
    });
  }

  filterItems() {
    this.items = [];
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].tagName.toLowerCase() == 'vaadin-item-2') {
        this.items.push(this.children[i]);
      }
    }
  }
}
customElements.define('vaadin-list-box-2', VaadinListBox2);
