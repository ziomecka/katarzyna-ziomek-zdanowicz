import {
  CreateComponent,
  Helpers,
  buildCreateComponent as commonBuilder,
} from '../common/';

const render = require('rendering-recursive-server-side').default;

const buildCreateComponent = async (
  { classNames = {}, options = [] } = {}
): Promise<{createComponent: CreateComponent; helpers: Helpers}> => {
  return commonBuilder({
    render,
    inject: { classNames },
    options,
  });
};

export { buildCreateComponent };
