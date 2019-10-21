import { IconLinks } from '../';
import { media } from './constants';

export const WorkMedia: ComponentFunction<WorkMediaProps> = (
  ({ flex, targetBlank, ...otherProps } = {}) => {
    return IconLinks({
      links: media,
      flex,
      targetBlank,
      IconLinkProps: { targetBlank },
      ...otherProps,
    });
  }
);

interface WorkMediaProps {
  targetBlank?: boolean;
}