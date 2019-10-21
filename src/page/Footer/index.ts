import {
  Box,
  Footer as FooterComponent,
  Typography,
} from '../../components';
import {
  CV,
  SocialMedia,
  WorkMedia,
} from '../';
import getContent from '../_content/';

const boxLinkClassName = 'box-links';
const buttonIconClassName = 'button-icon';

export const Footer: ComponentFunction<FooterProps> = ({
  CVProps: { href },
  targetBlank = false,
}) => {
  const {
    footer: {
      heading,
      contact,
      cv,
      projects,
    },
  } = getContent();

  const copyright = `©${ new Date().getFullYear() }`;

  const value = heading
    ? `${ heading }, ${ copyright }`
    : copyright;

  const typographyProps = {
    flex: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  };
  const boxProps = {
    className: boxLinkClassName,
    flex: {},
  };

  return FooterComponent({
    flex: { justifyContent: 'space-between' },
    children: [
      Box({
        flex: {},
        children: [ Typography({ innerHTML: value }) ],
      }),
      Box({
        flex: {
          flexWrap: 'nowrap',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        children: [
          Box({
            ...boxProps,
            children: [
              Typography({ value: cv, ...typographyProps }),
              CV({
                flex: { alignItems: 'center' },
                attributes: {
                  href,
                  'aria-hidden': true,
                },
                className: buttonIconClassName,
              }),
            ],
          }),
          Box({
            ...boxProps,
            children: [
              Typography({ value: contact, ...typographyProps }),
              SocialMedia({
                targetBlank,
                flex: {
                  display: 'inline-flex',
                  justifyContent: 'flex-start',
                },
              }),
            ],
          }),
          Box({
            ...boxProps,
            children: [
              Typography({ value: projects, ...typographyProps }),
              WorkMedia({
                targetBlank,
                flex: { justifyContent: 'flex-start' },
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

interface FooterProps {
  targetBlank?: boolean;
  CVProps: {
    href: string;
  };
}
