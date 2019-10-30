import { blankRelAttribute } from './_constants';

export const Link: ComponentFunction<LinkProps> =
({ attributes = { target: '' }, ...otherProps } = {}) => {
  const relAttribute = attributes.target === Target.blank
    ? blankRelAttribute
    : {};

  return createComponent({
    componentId: 'link',
    HTMLTag: 'a',
    ...otherProps,
    attributes: {
      ...attributes,
      ...relAttribute,
    },
  });
};

interface LinkProps {
  attributes?: LinkAttributes & Record<string, string | boolean | number>;
}
