import {
  Box,
  IconLink,
} from '../../components';

const defaultClassName = 'socialmedia';

export const IconLinks: ComponentFunction<IconLinksProps> = (
  ({
    flex,
    links,
    targetBlank,
    IconLinkProps = {},
    className = '',
    ...otherProps
  }) => {
    const target = targetBlank
      ? '_blank'
      : '';

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
              attributes: { href, target },
              ...IconLinkProps,
            })
          )),
      })
    );
  }
);

interface IconLinksProps {
  links: [string, string][];
  targetBlank?: boolean;
  IconLinkProps?: ComponentProps;
}
