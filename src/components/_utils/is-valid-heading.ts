import { TypographyVariant } from '../Typography';

export const headingVariants = [
  TypographyVariant.h1,
  TypographyVariant.h2,
  TypographyVariant.h3,
  TypographyVariant.h4,
  TypographyVariant.h5,
  TypographyVariant.h6,
];

export const isValidHeading = (str: string): boolean => {
  return headingVariants.includes(str as TypographyVariant);
};
