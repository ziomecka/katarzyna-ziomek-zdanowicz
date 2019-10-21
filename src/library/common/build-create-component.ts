import {
  Helpers,
  buildComponentHelpers,
} from './build-component-helpers';
import { CreateComponent } from './types';
import { CreateComponentHelpers } from './build-component-helpers/types';
import { buildStyle } from '../utils/build-style';

export const buildCreateComponent = async (
  {
    render,
    inject: { classNames = {} } = {},
    options = [],
  }: BuildCreateComponentProps = { render: (): string => '' }
): Promise<{createComponent: CreateComponent; helpers: Helpers }> => {

  const createComponent = ({
    componentId,
    className = '',
    style,
    flex,
    ...otherProps
  }): string => {
    const injectedClassName = (componentId && classNames[ componentId ])
      ? classNames[ componentId ]
      : '';

    return render({
      style: buildStyle(style, flex),
      ...otherProps,
      className: `${ injectedClassName } ${ className }`,
    });
  };

  return {
    createComponent,
    helpers: await buildComponentHelpers(options),
  };
};

interface BuildCreateComponentProps {
  render(props: {
    className?: string;
    classNames?: ClassNames;
    style: Record<string, string | number>;
  }): string;
  inject?: {
    classNames?: ClassNames;
  };
  options?: CreateComponentHelpers[];
}
