import { isValidTypography } from './_utils/is-valid-typography';

const defaultHtmlTag = 'p';

export const Typography: ComponentFunction<TypographyProps> = (
  ({ variant, ...otherProps }) => {
    const HTMLTag = isValidTypography(variant)
      ? variant
      : defaultHtmlTag;

    return createComponent({
      HTMLTag,
      componentId: 'typography',
      ...otherProps,
    });
  }
);

interface TypographyProps {
  variant?: string | TypographyVariant;
}

export const enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
}
