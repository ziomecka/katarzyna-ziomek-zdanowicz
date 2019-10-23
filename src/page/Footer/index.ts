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

  const typographyProps = {
    flex: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: '1 2 50%',
    },
  };

  const boxProps = {
    className: boxLinkClassName,
    flex: {
      justifyContent: 'flex-end',
    },
  };

  const socialMediaProps = {
    flex: {
      display: 'inline-flex',
      justifyContent: 'flex-end',
      flex: '1 0 50%',
    },
  };

  return FooterComponent({
    flex: {
      alignItems: 'flex-start',
      justifyContent: heading ? 'space-between' : 'flex-end',
    },
    children: [
      heading && Box({
        flex: {
          flex: '0 2 40%',
          alignItems: 'flex-start',
        },
        children: [ Typography({ innerHTML: heading }) ],
      }),
      Box({
        flex: {
          flex: '1 0 55%',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: heading ? 'space-between' : 'flex-end',
        },
        children: [
          Box({
            ...boxProps,
            children: [
              Typography({
                value: cv,
                ...typographyProps,
              }),
              Box({
                ...socialMediaProps,
                className: 'socialmedia',
                children: [
                  CV({
                    flex: { justifyContent: 'flex-end' },
                    attributes: {
                      href,
                      'aria-hidden': true,
                    },
                    className: buttonIconClassName,
                  }),
                ],
              }),
            ],
          }),
          Box({
            ...boxProps,
            children: [
              Typography({
                value: contact,
                ...typographyProps,
              }),
              SocialMedia({
                targetBlank,
                ...socialMediaProps,
              }),
            ],
          }),
          Box({
            ...boxProps,
            children: [
              Typography({
                value: projects,
                ...typographyProps,
              }),
              WorkMedia({
                targetBlank,
                ...socialMediaProps,
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
