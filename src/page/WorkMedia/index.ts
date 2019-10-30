import { IconLinks } from '../';
import { media } from './constants';

export const WorkMedia: ComponentFunction<WorkMediaProps> = (
  ({
    flex = undefined,
    IconLinkProps = {},
    attributes = {},
    ...otherProps
  } = {}) => {
    return IconLinks({
      links: media,
      flex,
      IconLinkProps,
      attributes,
      ...otherProps,
    });
  }
);

interface WorkMediaProps {
  IconLinkProps?: ComponentProps;
}
