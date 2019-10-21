import {
  Box,
  TileList,
} from '../../components/';
import {
  Footer,
  Welcome,
} from '../';
import { buildScrollListener } from './build-scroll-listener';
import constants from './constants';
import { cvHref } from '../_constants';
import getContent from '../_content/';
import { tilesRender } from './tiles-render';

const boxContentClassName = 'box--content';

export const Page: ComponentFunction = ({
  classNames,
  helpers: {
    controlBodyClassList,
    controlBodyScroll,
    windowEventsPublisher,
    loopThroughChildren,
  },
}) => {
  const {
    aboutMe,
    welcome,
  } = getContent();

  windowEventsPublisher.subscribe(
    'scroll',
    buildScrollListener(document.getElementById(constants.welcomeId)),
  );

  return Box({
    HTMLTag: 'main',
    children: [
      Welcome({
        classNames,
        heading: welcome.heading,
        attributes: { id: constants.welcomeId },
        IconLinkProps: {
          attributes: {
            href: `#${ constants.gridId }`,
            title: aboutMe.iconLink as string,
          },
        },
      }),
      Box({
        attributes: { id: constants.gridId },
        style: { position: 'relative' },
        className: boxContentClassName,
        children: [
          TileList({
            items: tilesRender({ helpers: {
              controlBodyClassList,
              controlBodyScroll,
              windowEventsPublisher,
              loopThroughChildren,
            } }),
            flex: { alignItems: 'center' },
          }),
          Footer({ CVProps: { href: cvHref } }),
        ],
      }),
    ],
  });
};
