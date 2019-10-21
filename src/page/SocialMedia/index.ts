import { IconLinks } from '../';
import { medias } from './constants';

export const SocialMedia: ComponentFunction<SocialMediaProps> = (
  ({ targetBlank, ...otherProps } = {}) => {
    return IconLinks({
      IconLinkProps: { targetBlank },
      links: medias,
      ...otherProps,
    });
  }
);

interface SocialMediaProps {
  targetBlank?: boolean;
}
