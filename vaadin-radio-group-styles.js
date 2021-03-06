import { css } from 'lit-element';

export const vaadinRadioGroupStyles = css`
  :host {
    --dot-size: calc(var(--lumo-size-xs) / 4);
    color: var(--lumo-body-text-color);
    display: inline-block;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  fieldset,
  [role="radiogroup"] {
    border: none;
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  legend,
  label#legend,
  ::slotted(label#legend) {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
    margin-bottom: var(--lumo-space-xs);
  }

  label {
    cursor: var(--lumo-clickable-cursor);
    display: inline-flex;
  }

  input {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  span {
    display: inline-flex;
    user-select: none;
    margin-bottom: var(--lumo-space-s);
    position: relative;
  }

  span::before {
    align-items: center;
    background-color: var(--lumo-primary-contrast-color);
    border: calc(var(--lumo-icon-size-s) / 2) solid var(--lumo-contrast-20pct);
    border-radius: 50%;
    box-sizing: border-box;
    color: transparent;
    content: '';
    flex-shrink: 0;
    font-family: lumo-icons;
    height: var(--lumo-icon-size-s);
    margin-right: var(--lumo-space-s);
    margin-top: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-icon-size-s)) / 2);
    width: var(--lumo-icon-size-s);
  }

  input:checked ~ span::before {
    border-color: var(--lumo-primary-color);
    border-width: calc(var(--lumo-icon-size-s) / 3);
  }

  label:hover input:not(:checked) ~ span::before {
    border-color: var(--lumo-contrast-30pct);
  }

  input:focus ~ span::before {
    box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
  }
`;
