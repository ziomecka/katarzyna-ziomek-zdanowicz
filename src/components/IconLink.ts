import { targetBlankAttribute } from './_constants';

export const IconLink: ComponentFunction<IconLinkProps> =
({ attributes = { target: '' }, targetBlank, ...otherProps }) => {
  const targetAttribute = attributes.target === '_blank' || targetBlank
    ? targetBlankAttribute
    : {};

  return createComponent({
    componentId: 'iconLink',
    HTMLTag: 'a',
    ...otherProps,
    attributes: {
      ...attributes,
      ...targetAttribute,
    },
  });
};

export interface IconLinkProps {
  attributes: LinkAttributes;
  targetBlank?: boolean;
  className?: string;
}
