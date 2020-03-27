import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

export const vaadinCheckboxGroupStyles = css`
  :host {
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
`;
