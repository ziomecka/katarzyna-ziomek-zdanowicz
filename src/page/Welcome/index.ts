/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Box,
  Header,
  Heading,
  IconLink,
  TypographyVariant,
} from '../../components/';
import { IconLinkProps } from '../../components/IconLink';
import { NoScript } from '../';
import { WelcomeContent } from '../_content/types';
import { expandMoreDoubleIcon } from '../_constants';

const headingSVG = require('../../static/icons/heading.svg');
const shadowSVG = require('../../static/icons/shadow.svg');

export const Welcome: ComponentFunction<WelcomeProps> = ({
  content: { noScript },
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
      shadowSVG,
      Heading({
        variant: headingVariant,
        children: [ headingSVG ],
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
              NoScript({
                value: noScript,
              }),
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
  content: WelcomeContent;
  headingVariant?: TypographyVariant;
  IconLinkProps: IconLinkProps;
}
