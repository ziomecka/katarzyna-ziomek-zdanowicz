/* eslint-disable @typescript-eslint/no-var-requires */
const { buildCreateComponent } = require('render-it-server');

import { options } from './common';

const createGlobalCreateComponent = (
  async ({ classNames = {} } = {}): Promise<{ helpers: Helpers }> => {
    const fakeFunction = (): void => {};

    global.window = {
      addEventListener: fakeFunction,
      removeEventListener: fakeFunction,
      document: {
        addEventListener: fakeFunction,
        removeEventListener: fakeFunction,
      },
    };

    global.document = {
      getElementById: fakeFunction,
      getElementsByClassName: fakeFunction,
      getElementsByTagName: fakeFunction,
    };

    const { helpers } = await buildCreateComponent({
      inject: { classNames },
      options,
      global: { createComponent: true },
    });

    return { helpers };
  }
);

export default createGlobalCreateComponent;
