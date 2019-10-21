import { Helpers } from './types';
import { getCreateComponentHelper } from './create-component-helpers';

export const buildComponentHelpers = async (options): Promise<Helpers> => {
  const helpers: Helpers = {} as unknown as Helpers;

  for (let i = 0; i < options.length; i ++) {
    const mod = await getCreateComponentHelper(options[i]);
    helpers[options[i]] = (mod as { default: unknown }).default;
  }

  return helpers;
};

export { Helpers };
export { LoopThroughChildren } from './types';
