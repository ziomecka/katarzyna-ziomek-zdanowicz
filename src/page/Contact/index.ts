import {
  Box,
  Button,
  Content,
  Form,
  Input,
  Textarea,
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

const nameId = 'name-input';
const emailId = 'email-input';
const messageId = 'message-textarea';
const buttonHighlightClassName = 'button-highlight';
const bodyModalClassName = 'body--modal';
const bodyFormClassName = 'body--form';

export const Contact: ComponentFunction<ContactProps> = ({
  attributes = {},
  content,
  classNames,
  children = [],
  helpers: { addBodyClass, removeBodyClass, controlInternalState },
  closeModal = () => {},
  HeadingProps = {},
}) => {
  const {
    emailLabel,
    farewellHeading,
    heading,
    messageLabel,
    nameLabel,
  } = content;

  const flex = {
    flexDirection: 'column',
    alignItems: 'center',
  } as Flex;

  const nameSelector = `input#${ nameId }`;
  const emailSelector = `input#${ emailId }`;
  const messageSelector = `textarea#${ messageId }`;

  const [ name, changeName ] = controlInternalState('');
  const [ email, changeEmail ] = controlInternalState('');
  const [ message, changeMessage ] = controlInternalState('');

  const isValidForm = (): boolean => (
    isValid(name(), nameRegExp) &&
    isValid(email(), emailRegExp)
  );

  const addBodyFormClassName = (): void => addBodyClass(bodyFormClassName);

  const removeBodyFormClassName =
    (): void => removeBodyClass(bodyFormClassName);

  const onClick = async (): Promise<void> => {
    if (isValidForm()) {
      const apiResult = await onClickHandler(name(), email(), message());

      if (apiResult) {
        (document.querySelector(nameSelector) as HTMLInputElement)
          .value = '';
        (document.querySelector(emailSelector) as HTMLInputElement)
          .value = '';
        (document.querySelector(messageSelector) as HTMLInputElement)
          .value = '';
        removeBodyClass(bodyModalClassName);
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
                        closeModal();
                      }
                    },
                  },
                  FormComponents: [
                    Input({
                      label: nameLabel,
                      attributes: {
                        placeholder: nameLabel,
                        id: nameId,
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
                      attributes: {
                        placeholder: emailLabel,
                        id: emailId,
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
                    Textarea({
                      label: messageLabel,
                      attributes: {
                        placeholder: messageLabel,
                        id: messageId,
                        Rows: 1,
                      },
                      eventHandlers: {
                        onFocus: addBodyFormClassName,
                        onInput: (event: KeyboardEvent): void => {
                          changeMessage(
                            (event.target as HTMLTextAreaElement).value
                          );
                        },
                        onBlur: removeBodyFormClassName,
                      },
                    }),
                    Button({
                      label: content.formButton,
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
    addBodyClass(className: string): void;
    removeBodyClass(className: string): void;
    controlInternalState(value: string): [
      () => string,
      (value: string) => void,
    ];
  };
  modalId: string;
  unsubscribeForm?: () => void;
  closeModal?: () => void;
  HeadingProps: Partial<ComponentProps> & { heading: string };
}
