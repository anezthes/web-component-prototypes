import { css } from 'lit-element';

export const vaadinUploadFileStyles = css`
  :host {
    color: var(--lumo-body-text-color);
    display: block;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    margin-top: var(--lumo-space-m);
  }

  li {
    align-items: flex-start;
    display: inline-flex;
    width: 100%;
  }

  #icon {
    color: var(--lumo-primary-color);
    flex-shrink: 0;
    margin-right: var(--lumo-space-xs);
    margin-top: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-icon-size-m)) / 2);
    opacity: 0;
  }

  :host([value="100"]) #icon {
    opacity: 1;
  }

  #info {
    display: inline-flex;
    flex-direction: column;
    margin-right: var(--lumo-space-m);
    width: 100%;
  }

  #status {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  progress {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: var(--lumo-border-radius);
    height: calc(var(--lumo-size-xs) * 0.25);
    margin-top: var(--lumo-space-s);
    overflow: hidden;
    width: 100%;
  }

  progress::-webkit-progress-bar {
    background-color: var(--lumo-contrast-10pct);
    background-image: none;
  }

  progress::-webkit-progress-value {
    background-color: var(--lumo-primary-color);
    background-image: none;
  }

  progress::-moz-progress-bar {
    background-color: var(--lumo-primary-color);
    background-image: none;
  }

  #buttons {
    display: inline-flex;
    flex-shrink: 0;
    line-height: 1;
    margin-top: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-icon-size-m)) / 2);
  }
`;
