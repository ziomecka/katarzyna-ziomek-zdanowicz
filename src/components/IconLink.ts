import { blankRelAttribute } from './_constants';

export const IconLink: ComponentFunction<IconLinkProps> =
({ attributes = {}, ...otherProps }) => {
  const relAttribute = attributes.target === Target.blank
    ? blankRelAttribute
    : {};

  return createComponent({
    componentId: 'iconLink',
    HTMLTag: 'a',
    ...otherProps,
    attributes: {
      ...attributes,
      ...relAttribute,
    },
  });
};

export interface IconLinkProps {
  attributes: LinkAttributes;
  className?: string;
}
