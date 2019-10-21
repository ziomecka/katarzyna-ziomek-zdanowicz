import {
  Helpers,
  buildCreateComponent as commonBuilder,
} from '../common/';

const buildRender = require('rendering-recursive-client-side').default;

const buildCreateComponent = async ({
  classNames = {},
  options = [],
  globals = {
    createComponent: true,
    helpers: false,
  },
}: BuildCreateComponentProps = {}): Promise<{
  helpers: Helpers;
  createComponent: unknown;
}> => {
  const { createComponent: cc, helpers: h } = await commonBuilder({
    render: buildRender(document),
    inject: { classNames },
    options,
  });

  if (globals.createComponent) global.createComponent = cc;
  if (globals.helpers) global.helpers = h;

  return { createComponent: cc, helpers: h };
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
