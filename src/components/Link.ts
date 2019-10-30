import { targetBlankAttribute } from './_constants';

export const Link: ComponentFunction<LinkProps> =
({ attributes = { target: '' }, ...otherProps } = {}) => {
  const targetAttribute = attributes.target === '_blank'
    ? targetBlankAttribute
    : {};

  return createComponent({
    componentId: 'link',
    HTMLTag: 'a',
    ...otherProps,
    attributes: {
      ...attributes,
      ...targetAttribute,
    },
  });
};

interface LinkProps {
  attributes?: LinkAttributes & Record<string, string | boolean | number>;
}
