import { LitElement, html, css } from 'lit-element';
import { vaadinItemStyles } from './vaadin-item-styles.js';

class VaadinItem extends LitElement {
  static get styles() {
    return [vaadinItemStyles, css``]
  }
  render() {
    return html`
      <li id="focusElement" role="option" tabindex="-1">
        <slot></slot>
      </li>
    `;
  }
  setTabIndex(value) {
    this.shadowRoot.getElementById('focusElement').tabIndex = value;
  }
  getTabIndex() {
    return this.shadowRoot.getElementById('focusElement').tabIndex;
  }
  focus() {
    this.shadowRoot.getElementById('focusElement').focus();
  }
}
customElements.define('vaadin-item', VaadinItem);
