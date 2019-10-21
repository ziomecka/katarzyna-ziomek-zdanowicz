import {
  Contact,
  Knowledge,
} from '../';
import { Content, ModalProps } from '../../components/';
// import { PageContent } from '../types';
import constants from './constants';
import getContent from '../_content/';

const modalClassName = 'modal-story';
const contentClassName = 'content-story';

const {
  aboutMeId,
  knowledgeId,
  projectId,
  contactId,
} = constants;

const modalProps = {
  className: modalClassName,
  flex: {
    justifyContent: 'flex-start',
  },
};

const buildHeadingId = (strings, id): string => `${ id }-heading`;
// const mapProps = ([
//   { content = '', heading, title },
//   id,
//   Component,
//   componentProps = {},
// ]: Props): MappedProps => {
//   return {
//     tileHeading: title,
//     id,
//     Component: ({ modalId, attributes = {} } = {}): string => Component({
//       content,
//       attributes: { id, ...attributes },
//       contentInnerHTML: true,
//       flex: { flexDirection: 'column' },
//       modalId,
//       ...componentProps,
//     }),
//     ModalProps: {
//       ...modalProps,
//       HeadingProps: { heading },
//     },
//   };
// };

export const tilesList: TilesList = ({ helpers }) => {
  const {
    aboutMe,
    project,
    knowledge,
    contact,
  } = getContent();

  const commonProps = {
    className: contentClassName,
    captureFocus: true,
  };

  const projectTile = {
    id: projectId,
    Component: ({ modalId = '', attributes = {} } = {}): string => Content({
      content: project.content,
      attributes: { id: projectId, ...attributes },
      modalId,
      ...commonProps,
    }),
    ModalProps: {
      tileHeading: project.title,
      ...modalProps,
      justifyContent: 'flex-start',
      ariaLabelledBy: buildHeadingId`${ projectId }`,
      HeadingProps: {
        heading: project.heading,
        attributes: { id: buildHeadingId`${ projectId }` },
      },
    },
  };

  const aboutMeTile = {
    id: aboutMeId,
    Component: ({ modalId = '', attributes = {} } = {}): string => Content({
      content: aboutMe.content,
      attributes: { id: aboutMeId, ...attributes },
      modalId,
      ...commonProps,
    }),
    ModalProps: {
      ...modalProps,
      tileHeading: aboutMe.title,
      justifyContent: 'flex-start',
      ariaLabelledBy: buildHeadingId`${ aboutMeId }`,
      HeadingProps: {
        heading: aboutMe.heading,
        attributes: { id: buildHeadingId`${ aboutMeId }` },
      },
    },
  };

  const knowledgeTile: MappedProps = {
    id: knowledgeId,
    Component: ({ modalId, attributes = {} } = {}): string => Knowledge({
      content: knowledge,
      attributes: { id: knowledgeId, ...attributes },
      modalId,
      ...commonProps,
    }),
    ModalProps: {
      ...modalProps,
      tileHeading: knowledge.title,
      ariaLabelledBy: buildHeadingId`${ knowledgeId }`,
      HeadingProps: {
        heading: knowledge.heading,
        attributes: { id: buildHeadingId`${ knowledgeId }` },
      },
    },
  };

  const contactTile: MappedProps = {
    id: contactId,
    Component: ({ modalId, attributes = {} } = {}): string => (
      Contact({
        content: contact,
        attributes: { id: contactId, ...attributes },
        helpers,
        modalId,
        HeadingProps: {
          heading: contact.heading,
          attributes: { id: buildHeadingId`${ contactId }` },
        },
      })
    ),
    isForm: true,
    ModalProps: {
      tileHeading: contact.title,
      ariaLabelledBy: buildHeadingId`${ contactId }`,
      ContentProps: {
        flex: { justifyContent: 'center' },
      },
    },
  };

  return [ aboutMeTile, knowledgeTile, projectTile, contactTile ];
};

type TileList = MappedProps[];
type TilesList = ({ helpers }) => TileList;
// type Props = [
//   PageContent,
//   string,
//   ComponentFunction,
//   Partial<ComponentProps>?
// ];
type MappedProps = {
  ModalProps?: Partial<ComponentProps> & Partial<ModalProps> & {
    ContentProps?: Partial<ComponentProps>;
    tileHeading?: string;
  };
  HeadingProps?: {
    heading?: string;
    attributes?: Partial<ElementAttributes>;
  };
  Component: ComponentFunction;
  id: string;
  isForm?: boolean;
};