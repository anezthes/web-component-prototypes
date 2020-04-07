import { css } from 'lit-element';

export const vaadinCheckboxGroupStyles = css`
  :host {
    color: var(--lumo-body-text-color);
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

  ::slotted(vaadin-checkbox) {
    margin-bottom: var(--lumo-space-s);
  }
`;
