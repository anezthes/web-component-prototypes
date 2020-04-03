import { css } from 'lit-element';

export const vaadinButtonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    --lumo-button-size: var(--lumo-size-m);
    background-color: var(--lumo-contrast-5pct);
    border: none;
    border-radius: var(--lumo-border-radius);
    box-sizing: border-box;
    color: var(--lumo-primary-text-color);
    cursor: var(--lumo-clickable-cursor);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    height: var(--lumo-button-size);
    line-height: var(--lumo-button-size);
    min-width: calc(var(--lumo-button-size) * 2);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
    position: relative;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  button span {
    display: inline-block;
  }

  /* Sizes */

  :host([theme~='small']) button {
    --lumo-button-size: var(--lumo-size-s);
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='large']) button {
    --lumo-button-size: var(--lumo-size-l);
    font-size: var(--lumo-font-size-l);
  }

  /* Element states */

  button::before,
  button::after {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s;
    z-index: 1;
  }

  /* Hover */

  button:hover::before {
    opacity: 0.05;
  }

  @media (pointer: coarse) {
    button:not(:active):hover::before {
      opacity: 0;
    }
  }

  /* Active */

  button::after {
    filter: blur(8px);
    transition: opacity 1.4s, transform 0.1s;
  }

  button:active::before {
    opacity: 0.1;
    transition-duration: 0s;
  }

  button:active::after {
    opacity: 0.1;
    transform: scale(0);
    transition-duration: 0s, 0s;
  }

  /* Focus */

  button:focus {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    outline: none;
  }

  /* Tertiary & tertiary inline */

  :host([theme~='tertiary']) button,
  :host([theme~='tertiary-inline']) button {
    background-color: transparent;
    min-width: 0;
    transition: opacity 0.2s;
  }

  :host([theme~='tertiary']) button::before,
  :host([theme~='tertiary-inline']) button::before {
    display: none;
  }

  :host([theme~='tertiary']) button {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  @media (hover: hover) {
    :host([theme*='tertiary']) button:not(:active):hover {
      opacity: 0.8;
    }
  }

  :host([theme~='tertiary']) button:active,
  :host([theme~='tertiary-inline']) button:active {
    opacity: 0.5;
    transition-duration: 0s;
  }

  :host([theme~='tertiary-inline']) button {
    font-size: inherit;
    height: auto;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  /* Primary */

  :host([theme~='primary']) button {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary']) button:hover::before {
    opacity: 0.1;
  }

  :host([theme~='primary']) button:active::before {
    background-color: var(--lumo-shade-20pct);
  }

  @media (pointer: coarse) {
    :host([theme~='primary']) button:active::before {
      background-color: var(--lumo-shade-60pct);
    }

    :host([theme~='primary']) button:not(:active):hover::before {
      opacity: 0;
    }
  }

  :host([theme~='primary']) button:active::after {
    opacity: 0.2;
  }

  /* Success */

  :host([theme~='success']) button {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) button {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  /* Error */

  :host([theme~='error']) button {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) button {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  /* Contrast */

  :host([theme~='contrast']) button {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) button {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Icons */

  ::slotted(iron-icon) {
    display: inline-block;
    height: var(--lumo-icon-size-m);
    margin-top: calc((var(--lumo-button-size) - var(--lumo-icon-size-m)) / 2);
    vertical-align: top;
    width: var(--lumo-icon-size-m);
  }

  [part='prefix'] {
    margin-left: calc(var(--lumo-space-xs) * -1);
  }

  [part='suffix'] {
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) button {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  /* Disabled */

  button[disabled] {
    background-color: var(--lumo-contrast-5pct);
    color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }

  :host([theme~='primary']) button[disabled] {
    background-color: var(--lumo-primary-color-50pct);
    color: var(--lumo-primary-contrast-color);
  }

  :host([theme~='success'][theme~='primary']) button[disabled] {
    background-color: var(--lumo-success-color-50pct);
  }

  :host([theme~='error'][theme~='primary']) button[disabled] {
    background-color: var(--lumo-error-color-50pct);
  }

  :host([theme~='contrast'][theme~='primary']) button[disabled] {
    background-color: var(--lumo-contrast-50pct);
  }
`;
