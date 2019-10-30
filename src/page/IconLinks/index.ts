import {
  Box,
  IconLink,
} from '../../components';

const defaultClassName = 'socialmedia';

export const IconLinks: ComponentFunction<IconLinksProps> = (
  ({
    flex,
    links,
    IconLinkProps: { attributes = {}, ...otherIconLinkProps } = {},
    className = '',
    ...otherProps
  }) => {
    return (
      Box({
        ...otherProps,
        className: `${ defaultClassName } ${ className }`,
        flex: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          ...flex,
        },
        children: links
          .map(([ icon, href ]: [ string, string ]) => (
            IconLink({
              children: [ icon ],
              attributes: { href, ...attributes },
              ...otherIconLinkProps,
            })
          )),
      })
    );
  }
);

interface IconLinksProps {
  links: [string, string][];
  IconLinkProps?: ComponentProps;
}
