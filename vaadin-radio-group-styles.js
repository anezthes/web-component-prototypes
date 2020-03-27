import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

export const vaadinRadioGroupStyles = css`
  :host {
    --dot-size: calc(var(--lumo-size-xs) / 4);
    display: inline-block;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  legend {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
    margin-bottom: var(--lumo-space-xs);
  }

  label {
    align-items: center;
    display: inline-flex;
    min-height: var(--lumo-size-m);
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
    position: relative;
  }

  span::before {
    align-items: center;
    background-color: var(--lumo-primary-contrast-color);
    border: calc(var(--lumo-icon-size-s) / 2) solid var(--lumo-contrast-20pct);
    border-radius: 50%;
    box-sizing: border-box;
    color: transparent;
    content: "";
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
