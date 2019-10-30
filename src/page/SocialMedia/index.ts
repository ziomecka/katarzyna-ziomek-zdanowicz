import { IconLinks } from '../';
import { medias } from './constants';

export const SocialMedia: ComponentFunction<SocialMediaProps> = (
  ({ IconLinkProps = {}, ...otherProps } = {}) => {
    return IconLinks({
      IconLinkProps,
      links: medias,
      ...otherProps,
    });
  }
);

interface SocialMediaProps {
  IconLinkProps?: ComponentProps;
}
