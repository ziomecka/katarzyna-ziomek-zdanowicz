import {
  Helpers,
  buildCreateComponent as commonBuilder,
} from '../common/';

const buildRender = require('rendering-recursive-client-side').default;

const buildCreateComponent = async ({
  classNames = {},
  options = [],
  globals = {},
}: BuildCreateComponentProps = {}): Promise<{
  helpers: Helpers;
  createComponent: unknown;
}> => {
  const { createComponent, helpers } = await commonBuilder({
    render: buildRender(document),
    inject: { classNames },
    options,
  });

  if (globals.createComponent) global.createComponent = createComponent;
  if (globals.helpers) global.helpers = helpers;

  return { createComponent, helpers };
};

export { buildCreateComponent };

interface BuildCreateComponentProps {
  classNames?: Record<string, string>;
  options?: [];
  globals?: {
    createComponent?: boolean;
    helpers?: boolean;
  };
}
