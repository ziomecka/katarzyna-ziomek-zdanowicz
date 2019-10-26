import {
  Box,
  InputLabel,
} from './';

const defaultType = 'text';

export const Input: ComponentFunction<InputProps> = (
  ({
    type = defaultType,
    label,
    id = '',
    placeholder,
    required = true,
    attributes: { tabIndex = -1, autoFocus = false, ...otherAttributes } = {},
    ...otherProps
  } = {}) => {

    const InputComponent = ({
      attributes = {},
      ...other
    }: Partial<InputProps> & Partial<ComponentProps> = {}): string => (
      createComponent({
        HTMLTag: 'input',
        attributes: {
          type,
          id,
          placeholder,
          required,
          ...attributes,
          ...otherAttributes,
        },
        ...otherProps,
        ...other,
      })
    );

    return label
      ? Box({
        flex: {
          display: 'flex',
          justifyContent: 'center',
        },
        attributes: { tabIndex, autoFocus },
        className: 'box-input',
        children: [
          InputComponent(),
          InputLabel({ label, autoFocus }),
        ],
      })
      : InputComponent({ tabIndex, autoFocus });
  });

interface InputProps extends InputAttributes {
  label?: string;
}

interface InputAttributes {
  type?: InputType;
  id?: string;
  placeholder?: string;
  alt?: string;
  required?: boolean;
}

export const enum InputType {
  text = 'text',
  password = 'password',
  file = 'file',
  image = 'image',
}
