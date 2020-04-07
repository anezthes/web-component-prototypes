import { LitElement, html, css } from 'lit-element';
import { vaadinUploadStyles } from './vaadin-upload-styles.js';

class VaadinUpload extends LitElement {
  static get properties() { return {
    buttonText: { type: String },
    dndIcon: { type: String },
    dndText: { type: String }
  };}

  constructor() {
    super();
    this.buttonText = "Upload files...";
    this.dndIcon = "lumo:upload";
    this.dndText = "Drop files here";
  }

  static get styles() {
    return [vaadinUploadStyles, css``]
  }

  render() {
    return html`
      <div id="upload">
        <vaadin-button>${this.buttonText}</vaadin-button>
        <div id="dnd">
          <iron-icon icon="${this.dndIcon}"></iron-icon>
          <span>${this.dndText}</span>
        </div>
      </div>
      <input type="file"></input>
      <ul id="file-list">
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('vaadin-upload', VaadinUpload);
