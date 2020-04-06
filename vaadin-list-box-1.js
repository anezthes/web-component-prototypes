import { LitElement, html, css } from 'lit-element';
import { vaadinListBoxStyles } from './vaadin-list-box-styles.js';

class VaadinListBox1 extends LitElement {
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
      <ul role="listbox">
        <slot></slot>
      </ul>
    `;
  }

  firstUpdated() {
    this.filterItems();

    this.shadowRoot.querySelector('slot').addEventListener('slotchange', event => {
      this.children[0].setTabIndex(0);
    });

    this.addEventListener('click', event => {
      const option = event.target.closest('vaadin-item-1')
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
      if (this.children[i].tagName.toLowerCase() == 'vaadin-item-1') {
        this.items.push(this.children[i]);
      }
    }
  }
}
customElements.define('vaadin-list-box-1', VaadinListBox1);
