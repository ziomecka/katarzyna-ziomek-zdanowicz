/* eslint-disable @typescript-eslint/no-var-requires */
import { Page } from './page';
import { classNames } from './classNames';

const { hydrate }
  = require('../../just/devBundle/client/');

require('./static/styles/index.sass');

type Component = ComponentFunction<ComponentProps, HTMLCollection>;

require('./createComponent/client.ts').then(async ({ helpers = {} } = {}) => {
  hydrate({
    Component: Page as unknown as Component,
    rootId: 'root',
    classNames,
    helpers,
  });
});
