import { TypographyVariant } from './Typography';
import { isValidHeading } from './_utils/is-valid-heading';

const defaultHTMLTag = 'h1';

export const Heading: ComponentFunction<HeadingProps> = (
  ({ variant, ...otherProps }) => {
    const HTMLTag = isValidHeading(variant)
      ? variant
      : defaultHTMLTag;

    return createComponent({
      HTMLTag,
      ...otherProps,
    });
  }
);

interface HeadingProps {
  variant?: string | TypographyVariant;
}
