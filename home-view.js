import { LitElement, html, css } from 'lit-element';
import lumoStyles from './lumo-styles.js';

const $template = document.createElement('template');
$template.innerHTML = `<custom-style>
  <style include="lumo-badge lumo-color lumo-typography"></style>
</custom-style>`;

class HomeView extends LitElement {
  static get styles() {
    return [
      lumoStyles,
      css`
        :host {
          --lumo-clickable-cursor: pointer;
          --lumo-primary-color: hsl(214, 90%, 47%);
          --lumo-primary-text-color: hsl(214, 90%, 46%);
          --lumo-success-color: hsl(145, 80%, 29%);
          --lumo-success-text-color: hsl(145, 100%, 25%);
          --lumo-error-color: hsl(3, 100%, 46%);
          --lumo-error-text-color: hsl(3, 92%, 44%);
        }

        [theme~="dark"] {
          --lumo-primary-color: hsl(214, 85%, 50%);
          --lumo-success-color: hsl(145, 65%, 32%);
          --lumo-error-color: hsl(3, 90%, 48%);
          --lumo-error-text-color: hsl(3, 100%, 74%);
        }

        section[theme~="dark"] {
          padding: var(--lumo-space-m);
        }

        section + section {
          margin-top: var(--lumo-space-l);
        }
      `
    ]
  }
  render() {
    return html`
      <h1>Vaadin: Web Component Prototypes</h1>
      <section>
        <h2>Badges</h2>
        <section>
          <span theme="badge">Normal</span>
          <span theme="badge success">Success</span>
          <span theme="badge error">Error</span>
          <span theme="badge contrast">Contrast</span>
          <span theme="badge primary">Normal</span>
          <span theme="badge success primary">Success</span>
          <span theme="badge error primary">Error</span>
          <span theme="badge contrast primary">Contrast</span>
        </section>
        <section theme="dark">
          <span theme="badge">Normal</span>
          <span theme="badge success">Success</span>
          <span theme="badge error">Error</span>
          <span theme="badge contrast">Contrast</span>
          <span theme="badge primary">Normal</span>
          <span theme="badge success primary">Success</span>
          <span theme="badge error primary">Error</span>
          <span theme="badge contrast primary">Contrast</span>
        </section>
      </section>
      <section>
        <h2>Buttons</h2>
        <section>
          <vaadin-button>Secondary</vaadin-button>
        </section>
        <section>
          <vaadin-button theme="primary">Primary</vaadin-button>
          <vaadin-button theme="tertiary">Tertiary</vaadin-button>
          <vaadin-button theme="tertiary-inline">Tertiary Inline</vaadin-button>
        </section>
        <section>
          <vaadin-button theme="contrast primary">Primary</vaadin-button>
          <vaadin-button theme="contrast">Secondary</vaadin-button>
          <vaadin-button theme="contrast tertiary">Tertiary</vaadin-button>
        </section>
        <section>
          <vaadin-button theme="success primary">Primary</vaadin-button>
          <vaadin-button theme="success">Secondary</vaadin-button>
          <vaadin-button theme="success tertiary">Tertiary</vaadin-button>
        </section>
        <section>
          <vaadin-button theme="error primary">Primary</vaadin-button>
          <vaadin-button theme="error">Secondary</vaadin-button>
          <vaadin-button theme="error tertiary">Tertiary</vaadin-button>
        </section>
        <section>
          <vaadin-button theme="large">Large</vaadin-button>
          <vaadin-button theme="small">Small</vaadin-button>
        </section>
        <section>
          <vaadin-button><iron-icon icon="lumo:edit" slot="prefix"></iron-icon>Small</vaadin-button>
          <vaadin-button><iron-icon icon="lumo:edit" slot="suffix"></iron-icon>Small</vaadin-button>
        </section>
      </section>
      <hr />
      <section>
        <h2>Checkboxes</h2>
        <section>
          <vaadin-checkbox>Single checkbox</vaadin-checkbox>
        </section>
        <section>
          <vaadin-checkbox-group legend="Which consoles do you own?">
            <vaadin-checkbox>PlayStation</vaadin-checkbox>
            <vaadin-checkbox>Xbox</vaadin-checkbox>
            <vaadin-checkbox>Wii</vaadin-checkbox>
          </vaadin-checkbox-group>
        </section>
      </section>
      <hr />
      <section>
        <h2>Radio buttons</h2>
        <section>
          <vaadin-radio-group-1
            legend="Which science fiction media franchise do you prefer?"
            name="radio-1"
            options='["Star Wars", "Star Trek", "Stargate"]'>
          </vaadin-radio-group-1>
        </section>
        <section>
          <vaadin-radio-group-2
            legend="Which science fiction media franchise do you prefer?"
            options="3"
            name="radio-2">
            <div slot="option-1" class="custom-radio-option">
              <img src="https://api.adorable.io/avatars/48/luke@adorable.io.png" alt="Luke's avatar" />
              <div>
                <span>Star Wars</span>
                <span>Luke Skywalker</span>
              </div>
            </div>
            <div slot="option-2" class="custom-radio-option">
              <img src="https://api.adorable.io/avatars/48/picard@adorable.io.png" alt="Picard's avatar" />
              <div>
                <span>Star Trek</span>
                <span>Captain Picard</span>
              </div>
            </div>
            <div slot="option-3" class="custom-radio-option">
              <img src="https://api.adorable.io/avatars/48/jack@adorable.io.png" alt="Jack's avatar" />
              <div>
                <span>Stargate</span>
                <span>Colonel Jack O'Neill</span>
              </div>
            </div>
          </vaadin-radio-group-2>
        </section>
        <section>
          <vaadin-radio-group-3
            legend="Which science fiction media franchise do you prefer?">
            <vaadin-radio-button-1 name="radio-3">Star Wars</vaadin-radio-button-1>
            <vaadin-radio-button-1 name="radio-3">Star Trek</vaadin-radio-button-1>
            <hr>
            <vaadin-radio-button-1 name="radio-3">Stargate</vaadin-radio-button-1>
          </vaadin-radio-group-3>
        </section>
        <section>
          <vaadin-radio-group-4
            legend="Which science fiction media franchise do you prefer?">
            <vaadin-radio-button-2>Star Wars</vaadin-radio-button-2>
            <vaadin-radio-button-2>Star Trek</vaadin-radio-button-2>
            <hr>
            <vaadin-radio-button-2>Stargate</vaadin-radio-button-2>
          </vaadin-radio-group-4>
        </section>
        <section>
          <vaadin-radio-group-5
            aria-labelledby="legend"
            role="radiogroup">
            <label id="legend">Which science fiction media franchise do you prefer?</label>
            <vaadin-radio-button-3 aria-checked="false" role="radio" tabindex="0">Star Wars</vaadin-radio-button-3>
            <vaadin-radio-button-3 aria-checked="false" role="radio" tabindex="-1">Star Trek</vaadin-radio-button-3>
            <hr>
            <vaadin-radio-button-3 aria-checked="false" role="radio" tabindex="-1">Stargate</vaadin-radio-button-3>
          </vaadin-radio-group-5>
        </section>
      </section>
    `;
  }
}
customElements.define('home-view', HomeView);
