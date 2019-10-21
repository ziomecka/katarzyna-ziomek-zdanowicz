import {
  Box,
  Heading,
} from './';
import { IconButton } from './IconButton';
import { TypographyVariant } from './Typography';
import { closeIcon } from './_constants';

const modalClassName = 'modal';
const showModalClassName = 'modal--show';
const bodyModalClassName = 'body--modal';

// todo add box props
export const Modal: ComponentFunction<ModalProps> = ({
  attributes: { id, ...otherAttributes },
  className,
  closeLabel = '',
  eventHandlers = {},
  ariaDescribedBy,
  ariaLabelledBy,
  removeClass = (): void => {},
  turnOnBodyScrolling,
  unsubscribe,
  captureFocus = true,
  ContentProps: {
    attributes: contentAttributes = {},
    children = [],
    ...otherContentProps
  } = {},
  HeadingProps: {
    attributes: headingAttributes = {},
    heading,
    ...otherHeadingProps
  } = {},
  flex,
  ...otherModalProps
}) => {
  const onClick = (): void => {
    const $this = document.getElementById(id);
    if ($this) $this.classList.remove(showModalClassName);
    removeClass(bodyModalClassName);
    unsubscribe();
    turnOnBodyScrolling();
  };

  const tabIndex = !captureFocus || -1;

  return Box({
    className: className
      ? `${ modalClassName } ${ className }`
      : modalClassName,
    attributes: {
      role: 'dialog',
      'aria-modal': true,
      'aria-labelledby': ariaLabelledBy || headingAttributes.id,
      'aria-describedby':  ariaDescribedBy || contentAttributes.id || '',
      // tabIndex,
      id,
      ...otherAttributes,
    },
    eventHandlers: {
      ...eventHandlers,
      onClick: (): void => {
        eventHandlers.onClick && eventHandlers.onClick();
      },
    },
    children: [
      IconButton({
        children: [ closeIcon ],
        eventHandlers: { onClick },
        attributes: { 'data-label': closeLabel },
      }),
      (heading || children.length) && Box({
        flex,
        children: [
          heading && Heading({
            value: heading,
            variant: TypographyVariant.h2,
            attributes: headingAttributes,
            ...otherHeadingProps,
          }),
          ...children,
        ],
        attributes: {
          tabIndex,
          ...contentAttributes,
        },
        ...otherContentProps,
      }),
    ],
    ...otherModalProps,
  });
};

interface HeadingProps extends Partial<ComponentProps>, Attributes {
  heading?: string;
  headingVariant?: TypographyVariant;
  headingInnerHTML?: boolean;
}

interface Attributes extends Partial<ElementAttributes> {
  id: string;
}

export interface ModalProps {
  captureFocus?: boolean;
  closeLabel?: string;
  ContentProps?: Partial<ComponentProps>;
  HeadingProps?: Partial<HeadingProps>;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
}
