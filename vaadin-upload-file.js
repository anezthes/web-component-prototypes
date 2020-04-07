import { LitElement, html, css } from 'lit-element';
import { vaadinUploadFileStyles } from './vaadin-upload-file-styles.js';

class VaadinUploadFile extends LitElement {
  static get properties() { return {
    filename: { type: String },
    status: { type: String },
    value: { type: Number }
  };}

  constructor() {
    super();
    this.filename = "";
    this.status = "";
    this.value = 0;
  }

  static get styles() {
    return [vaadinUploadFileStyles, css``]
  }

  render() {
    return html`
      <li>
        <iron-icon id="icon" icon="lumo:checkmark"></iron-icon>
        <div id="info">
          <span id="filename">${this.filename}</span>
          <span id="status">${this.status}</span>
          <progress value="${this.value}" max="100"></progress>
        </div>
        <div id="buttons">
          <vaadin-button theme="icon tertiary-inline small" label="Start" hidden><iron-icon icon="lumo:play"></iron-icon></vaadin-button>
          <vaadin-button theme="icon tertiary-inline small" label="Retry" hidden><iron-icon icon="lumo:reload"></iron-icon></vaadin-button>
          <vaadin-button theme="icon tertiary-inline small" label="Clear"><iron-icon icon="lumo:cross"></iron-icon></vaadin-button>
        </div>
      </li>
    `;
  }
}

customElements.define('vaadin-upload-file', VaadinUploadFile);
