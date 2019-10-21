import { TypographyVariant } from '../Typography';
import { headingVariants } from './is-valid-heading';

const typographyVariants = [
  ...headingVariants,
  TypographyVariant.p,
];

export const isValidTypography = (str: string): boolean => {
  return typographyVariants.includes(str as TypographyVariant);
};
