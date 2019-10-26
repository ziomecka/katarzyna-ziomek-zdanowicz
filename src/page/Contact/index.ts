import {
  Box,
  Button,
  Content,
  Form,
  Input,
  Typography,
  TypographyVariant,
} from '../../components';
import {
  emailRegExp,
  nameRegExp,
} from './regexp';
import { ContactContent } from '../_content/types';
import { contactId } from '../_constants';
import { isValid } from './is-valid';
import { onClick as onClickHandler } from './on-click';
import { setStateHook } from '../../common';

const nameId = 'name-input';
const emailId = 'email-input';
const modalShowClassName = 'modal--show';
const buttonHighlightClassName = 'button-highlight';
const bodyModalClassName = 'body--modal';
const bodyFormClassName = 'body--form';

export const Contact: ComponentFunction<ContactProps> = ({
  attributes = {},
  content,
  classNames,
  children = [],
  helpers: { addClass, removeClass },
  modalId,
  HeadingProps = {},
}) => {
  const {
    farewellHeading,
    nameLabel,
    emailLabel,
    heading,
  } = content;

  const flex = {
    flexDirection: 'column',
    alignItems: 'center',
  } as Flex;

  const [ name, changeName ] = setStateHook('');
  const [ email, changeEmail ] = setStateHook('');

  const isValidForm = (): boolean => (
    isValid(name(), nameRegExp) &&
    isValid(email(), emailRegExp)
  );

  const addBodyFormClassName = (): void => addClass(bodyFormClassName);

  const removeBodyFormClassName = (): void => removeClass(bodyFormClassName);

  const onClick = async (): Promise<void> => {
    if (isValidForm()) {
      const apiResult = await onClickHandler(name(), email());

      if (apiResult) {
        (document.querySelector(`input#${ nameId }`) as HTMLInputElement)
          .value = '';
        (document.querySelector(`input#${ emailId }`) as HTMLInputElement)
          .value = '';
        removeClass(bodyModalClassName);
      }
    }
  };

  return (
    Content({
      classNames,
      attributes: { id: contactId, ...attributes },
      HeadingProps: {
        heading,
        style: { textAlign: 'center' },
        ...HeadingProps,
      },
      flex: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      style: { minHeight: '100%' },
      children: [
        Box({
          children: [
            Box({
              flex,
              children: [
                Form({
                  classNames,
                  eventHandlers: {
                    onSubmit: (): void => {
                      if (isValidForm()) {
                        document
                          .getElementById(modalId)
                          .classList.remove(modalShowClassName);
                      }
                    },
                  },
                  FormComponents: [
                    Input({
                      label: nameLabel,
                      placeholder: nameLabel,
                      id: nameId,
                      attributes: {
                        tabIndex: 0,
                        pattern: nameRegExp,
                      },
                      eventHandlers: {
                        onFocus: addBodyFormClassName,
                        onInput: (event: KeyboardEvent): void => {
                          changeName((event.target as HTMLInputElement).value);
                        },
                        onBlur: removeBodyFormClassName,
                      },
                    }),
                    Input({
                      label: emailLabel,
                      placeholder: emailLabel,
                      id: emailId,
                      attributes: {
                        tabIndex: 1,
                        pattern: emailRegExp,
                      },
                      eventHandlers: {
                        onFocus: addBodyFormClassName,
                        onInput: (event: KeyboardEvent): void => {
                          changeEmail((event.target as HTMLInputElement).value);
                        },
                        onBlur: removeBodyFormClassName,
                      },
                    }),
                    Button({
                      label: content.formButton,
                      attributes: { tabIndex: 2 },
                      className: buttonHighlightClassName,
                      eventHandlers: { onClick },
                    }),
                  ],
                }),
              ],
            }),
            Box({
              flex: { justifyContent: 'center' },
              children: [
                Typography({
                  value: farewellHeading,
                  variant: TypographyVariant.h3,
                  style: { textAlign: 'center' },
                }),
              ],
            }),
            ...children,
          ],
        }),
      ],
    })
  );
};

interface ContactProps {
  content: ContactContent;
  helpers: {
    addClass(className: string): void;
    removeClass(className: string): void;
  };
  modalId: string;
  unsubscribeForm?: () => void;
  HeadingProps: Partial<ComponentProps>;
}
