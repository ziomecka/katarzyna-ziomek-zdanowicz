import { IconLinks } from '../';
import { media } from './constants';

export const WorkMedia: ComponentFunction<WorkMediaProps> = (
  ({
    flex = undefined,
    IconLinkProps: {
      attributes: iconLinkAttributes = {},
      ...otherIconLinkProps
    } = {},
    attributes = {},
    ...otherProps
  } = {}) => {
    return IconLinks({
      links: media,
      flex,
      IconLinkProps: { attributes: iconLinkAttributes, ...otherIconLinkProps },
      attributes: {
        target: iconLinkAttributes.target || Target.self,
        ...attributes,
      },
      ...otherProps,
    });
  }
);

interface WorkMediaProps {
  IconLinkProps?: ComponentProps;
}
