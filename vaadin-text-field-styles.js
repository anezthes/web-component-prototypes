import { css } from 'lit-element';

export const vaadinTextFieldStyles = css`
  :host {
    color: var(--lumo-body-text-color);
    display: inline-flex;
    flex-direction: column;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  label {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
    margin-bottom: var(--lumo-space-xs);
  }

  #input-wrapper {
    background-color: var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius);
    display: inline-flex;
  }

  input {
    background-color: transparent;
    border: none;
    height: var(--lumo-size-m);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    padding: 0 var(--lumo-space-s);
  }

  #error {
    color: var(--lumo-error-text-color);
    font-size: var(--lumo-font-size-s);
    margin-top: var(--lumo-space-xs);
  }
`;
