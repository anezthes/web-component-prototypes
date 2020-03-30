import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

export const vaadinCheckboxStyles = css`
  :host {
    color: var(--lumo-body-text-color);
    display: inline-block;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    position: relative;
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
    position: relative;
  }

  span::before {
    align-items: center;
    background-color: var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius);
    color: transparent;
    content: var(--lumo-icons-checkmark);
    display: inline-flex;
    flex-shrink: 0;
    font-family: lumo-icons;
    height: var(--lumo-icon-size-s);
    justify-content: center;
    margin-right: var(--lumo-space-s);
    margin-top: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-icon-size-s)) / 2);
    width: var(--lumo-icon-size-s);
  }

  input:checked ~ span::before {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  label:hover input:not(:checked) ~ span::before {
    background-color: var(--lumo-contrast-30pct);
  }

  input:focus ~ span::before {
    box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
  }
`;
