import {
  Box,
  Header,
  Heading,
  IconLink,
  TypographyVariant,
} from '../../components/';
import { IconLinkProps } from '../../components/IconLink';
import { expandMoreDoubleIcon } from '../_constants';

export const Welcome: ComponentFunction<WelcomeProps> = ({
  heading = '',
  headingVariant = TypographyVariant.h1,
  IconLinkProps,
  style = {},
  ...otherProps
}) => {
  return Header({
    ...otherProps,
    flex: {
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    style: {
      ...style,
      position: 'relative',
      height: '100vh',
      color: '#000000',
      opacity: 1,
      zIndex: 2,
    },
    children: [
      Heading({
        variant: headingVariant,
        value: heading,
      }),
      Box({
        flex: {
          justifyContent: 'center',
        },
        children: [
          Box({
            flex: {
              justifyContent: 'center',
            },
            children: [
              IconLink({
                ...IconLinkProps,
                children: [ expandMoreDoubleIcon ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

interface WelcomeProps {
  heading: string;
  headingVariant?: TypographyVariant;
  IconLinkProps: IconLinkProps;
}