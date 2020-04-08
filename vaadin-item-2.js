import { LitElement, html, css } from 'lit-element';
import { vaadinItemStyles } from './vaadin-item-styles.js';

class VaadinItem2 extends LitElement {
  static get styles() {
    return [vaadinItemStyles, css``]
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
  firstUpdated() {
    this.setAttribute('role', 'option');
    this.setAttribute('tabIndex', '-1')
  }
}
customElements.define('vaadin-item-2', VaadinItem2);
