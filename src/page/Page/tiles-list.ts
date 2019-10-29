import {
  Contact,
  Knowledge,
} from '../';
import { Content, ModalProps } from '../../components/';
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
  } as Flex,
};

const buildHeadingId = (strings, id): string => `${ id }-heading`;

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
    Component: ({ attributes = {} } = {}): string => Content({
      content: project.content,
      attributes: { id: projectId, ...attributes },
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
    Component: ({ attributes = {} } = {}): string => Content({
      content: aboutMe.content,
      attributes: { id: aboutMeId, ...attributes },
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
    Component: ({ attributes = {} } = {}): string => Knowledge({
      content: knowledge,
      attributes: { id: knowledgeId, ...attributes },
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
type MappedProps = {
  ModalProps?: Partial<ComponentProps> & Partial<ModalProps> & {
    ContentProps?: Partial<ComponentProps>;
    tileHeading?: string;
  };
  HeadingProps?: {
    heading?: string;
    attributes?: Partial<HTMLElementAttributes>;
  };
  Component: ComponentFunction<{ heading?: string }>;
  id: string;
  isForm?: boolean;
};
