import { css } from 'lit-element';

export const vaadinUploadStyles = css`
  :host {
    border: 1px dashed var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius);
    color: var(--lumo-body-text-color);
    display: block;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    padding: calc(var(--lumo-space-l) - 1px);
  }

  #upload,
  #dnd {
    align-items: center;
    display: inline-flex;
  }

  vaadin-button {
    margin-right: var(--lumo-space-m);
  }

  iron-icon {
    margin-right: var(--lumo-space-xs);
  }

  input[type="file"] {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
