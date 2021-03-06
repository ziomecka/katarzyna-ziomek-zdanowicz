import {
  Box,
  List,
} from '../../components/';
import {
  Footer,
  Welcome,
} from '../';
import { buildScrollListener } from './build-scroll-listener';
import constants from './constants';
import { cvHref } from '../_constants';
import getContent from '../_content/';
import { loadListener } from './load-listener';
import { tilesRender } from './tiles-render';

const screenClassName = 'screen';

const tileListClassName = 'list-tiles';
const tileClassName = 'tile';

export const Page: ComponentFunction = ({
  classNames,
  helpers: {
    modifyBodyClassList,
    controlBodyScroll,
    documentEventsPublisher,
    windowEventsPublisher,
    controlInternalState,
  },
}) => {
  const {
    aboutMe,
    welcome,
  } = getContent();

  windowEventsPublisher.subscribe('load', loadListener);
  windowEventsPublisher.subscribe(
    'scroll',
    buildScrollListener(constants.welcomeId),
  );

  return Box({
    HTMLTag: 'main',
    children: [
      Welcome({
        classNames,
        content: welcome,
        className: screenClassName,
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
        className: screenClassName,
        flex: { alignItems: 'center' },
        children: [
          List({
            className: tileListClassName,
            props: {
            },
            childrenProps: tilesRender({
              helpers: {
                controlBodyScroll,
                controlInternalState,
                documentEventsPublisher,
                modifyBodyClassList,
                windowEventsPublisher,
              },
            }).map(props => ({
              ...props,
              className: tileClassName,
              flex: {
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            })),
            flex: {
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              flexWrap: 'wrap',
            },
          }),
          Footer({ CVProps: { href: cvHref } }),
        ],
      }),
    ],
  });
};
