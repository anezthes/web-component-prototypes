import { DomModule } from '@polymer/polymer/lib/elements/dom-module.js';
import { stylesFromTemplate } from '@polymer/polymer/lib/utils/style-gather.js';
import { css, unsafeCSS } from 'lit-element';

const getStyleModule = (id, cb) => {
  const template = DomModule.import(id, 'template');
  let cssText =
    template &&
    stylesFromTemplate(template)
      .map(style => style.textContent)
      .join(' ');
  return unsafeCSS(cssText);
};

export default css`
  ${getStyleModule('lumo-badge')}
  ${getStyleModule('lumo-color')}
  ${getStyleModule('lumo-typography')}
`;
