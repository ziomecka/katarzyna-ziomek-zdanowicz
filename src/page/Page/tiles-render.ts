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
    controlBodyClassList: { addClass, removeClass },
    controlBodyScroll: { turnOnBodyScrolling, turnOffBodyScrolling },
    windowEventsPublisher,
    loopThroughChildren,
  },
}): TileProps[] => {

  let unsubscribeForm = fakeFunction;
  let unsubscribeModal = fakeFunction;

  const buildFormKeydownListener = ($element: HTMLElement) => (
    (event: KeyboardEvent): void => {
      if (event.key.toLowerCase() === 'enter') {
        const $button = loopThroughChildren({
          children: $element.children,
          callback: ($child) => {
            if ($child.tagName.toLowerCase() === 'button') {
              return $child;
            }
          },
          breakOnTruthy: true,
        });

        $button && ($button as HTMLButtonElement).click();
      }
    }
  );

  const keydownCallback = (classList) => (event: KeyboardEvent): void => {
    if (event.key.toLowerCase() === 'escape') {
      classList.remove(showModalClassName);
      removeClass(bodyModalClassName);
      unsubscribeModal();
      unsubscribeModal = fakeFunction;
      unsubscribeForm();
      unsubscribeForm = fakeFunction;
      turnOnBodyScrolling();
    }
  };

  return tilesList({ helpers: { addClass, removeClass } })
    .map(({
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
        unsubscribeForm();
        unsubscribeModal();
        unsubscribeModal = fakeFunction;
        unsubscribeForm = fakeFunction;
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
          addClass(bodyModalClassName);
          $content.scrollTo({ top: 0 });
          setTimeout(() => $content && ($content as HTMLElement).focus());

          unsubscribeModal = windowEventsPublisher
            .subscribe('keydown', keydownCallback(classList));

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
            removeClass,
            ariaDescribedBy: componentId,
            closeLabel: 'close',
            unsubscribe: () => {
              unsubscribeModal();
              unsubscribeModal = fakeFunction;
              unsubscribeForm();
              unsubscribeForm = fakeFunction;
            },
            turnOnBodyScrolling,
            ...otherModalProps,
          }),
        ],
      };
    });
};
