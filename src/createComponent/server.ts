import { Helpers } from 'src/library/common/build-component-helpers';
import { buildCreateComponent } from '../library/server/';
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

    const {
      createComponent,
      helpers,
    } = await buildCreateComponent({ classNames, options });

    global.createComponent = createComponent;
    return { helpers };
  }
);

export default createGlobalCreateComponent;
