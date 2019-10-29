import {
  Heading,
  Modal,
  TileProps,
  TypographyVariant,
} from '../../components/';
import { Dots } from '../';
import { tilesList } from './tiles-list';

const showModalClassName = 'modal--show';
const bodyModalClassName = 'body--modal';
const tilePrefix = 'tile';
const descriptionSuffix = 'description';
const h2 = TypographyVariant.h2;
const fakeFunction = (): void => {};

export const tilesRender = ({
  helpers: {
    modifyBodyClassList: { addBodyClass, removeBodyClass },
    controlBodyScroll: { turnOnBodyScrolling, turnOffBodyScrolling },
    documentEventsPublisher,
    windowEventsPublisher,
  },
}): TileProps[] => {

  let unsubscribeForm = fakeFunction;
  let unsubscribeEscapeKey = fakeFunction;
  let unsubscribeBrowserBack = fakeFunction;
  let unsubscribeNavigate = fakeFunction;
  let unsubscribeBackButton = fakeFunction;

  const buildFormKeydownListener = ($element: HTMLElement) => (
    (event: KeyboardEvent): void => {
      if (event.key.toLowerCase() === 'enter') {
        const $button = $element.getElementsByTagName('button')[0];
        $button && ($button as HTMLButtonElement).click();
      }
    }
  );

  const resetUnsubscribes = (): void => {
    unsubscribeEscapeKey = fakeFunction;
    unsubscribeNavigate = fakeFunction;
    unsubscribeBackButton = fakeFunction;
    unsubscribeBrowserBack = fakeFunction;
    unsubscribeForm = fakeFunction;
  };

  const closeModal = (classList?: ClassList): void => {
    if (classList) classList.remove(showModalClassName);
    removeBodyClass(bodyModalClassName);
    unsubscribeEscapeKey();
    unsubscribeNavigate();
    unsubscribeBackButton();
    unsubscribeBrowserBack();
    unsubscribeForm();
    turnOnBodyScrolling();
    resetUnsubscribes();
  };

  const keydownCallback =
    (classList?: ClassList) => (event: KeyboardEvent): void => {
      if (event.key.toLowerCase() === 'escape') {
        closeModal(classList);
      }
    };

  return (
    tilesList(
      { helpers: { addBodyClass, removeBodyClass } }
    ).map(({
      HeadingProps = {},
      Component,
      id,
      isForm,
      ModalProps: {
        tileHeading = '',
        flex = {},
        ContentProps: {
          children: childrenContentProps = [],
          ...otherContentProps
        } = {},
        ...otherModalProps
      } = {},
    }) => {

      const modalId = String(id);

      const closeOtherModals = (): void => {
        const $openedModals =
          document.getElementsByClassName(showModalClassName);

        Array.from($openedModals).forEach($modal => (
          $modal.classList.remove(showModalClassName)
        ));
        closeModal();
      };

      const onClick = (): void => {
        const $modal = document.getElementById(modalId);
        const { classList } = $modal;

        if (!Array.from(classList).includes(showModalClassName)) {
          closeOtherModals();

          const [ $content ] =
            Array.from($modal.getElementsByClassName('box'));
          turnOffBodyScrolling();
          classList.add(showModalClassName);
          addBodyClass(bodyModalClassName);
          $content.scrollTo({ top: 0 });
          setTimeout(() => $content && ($content as HTMLElement).focus());

          unsubscribeEscapeKey = windowEventsPublisher
            .subscribe('keydown', keydownCallback(classList));

          unsubscribeBrowserBack = windowEventsPublisher
            .subscribe('popstate', (): void => {
              closeModal(classList);
            });

          unsubscribeNavigate = windowEventsPublisher
            .subscribe('navigate', (
              event,
              { state: { direction = '' } } = { state: { } }
            ) => {
              if (direction == 'back') {
                event.preventDefault();
                closeModal(classList);
              }
            });

          unsubscribeBackButton = documentEventsPublisher
            .subscribe('backbutton', (event) => {
              event.preventDefault();
              closeModal(classList);
            });

          // todo improve
          if (isForm) {
            document.getElementById('name-input').focus();
            unsubscribeForm = windowEventsPublisher.subscribe(
              'keydown',
              buildFormKeydownListener(
                document.getElementsByTagName('form')[0],
              ),
            );
          }
        }
      };

      const componentId = `${ id }-${ descriptionSuffix }`;

      return {
        attributes: { id: `${ tilePrefix }-${ id }` },
        eventHandlers: { onClick },
        children: [
          tileHeading.length && Heading({
            value: tileHeading,
            variant: h2,
            children: [ Dots() ],
          }),
          Modal({
            flex: {
              flexDirection: 'column',
              alignItems: 'center',
              ...flex,
            },
            HeadingProps,
            ContentProps: {
              children: [
                Component({ modalId, attributes: { id: componentId } }),
              ].concat(childrenContentProps),
              ...otherContentProps,
            },
            HTMLTag: 'div',
            attributes: { id: modalId },
            removeBodyClass,
            ariaDescribedBy: componentId,
            closeLabel: 'close',
            unsubscribe: closeModal,
            turnOnBodyScrolling,
            ...otherModalProps,
          }),
        ],
      };
    })
  );
};

interface ClassList {
  remove(className: string): void;
  add(className: string): void;
}
