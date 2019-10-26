import {
  Box,
  InputLabel,
} from '../components/';

export const InputComponentBuilder: InputComponentBuilder<CProps> = ({
  HTMLTag = 'input',
  attributes: { type = '' } = {},
}): ComponentFunction<CProps> => (
  ({
    label,
    id = '',
    placeholder,
    required = true,
    attributes: { tabIndex = -1, autoFocus = false, ...otherAttributes } = {},
    ...otherProps
  } = {}): string => {

    const attributes = type
      ? {
        type,
        id,
        placeholder,
        required,
        ...otherAttributes,
      }
      : {
        id,
        placeholder,
        required,
        ...otherAttributes,
      };

    const Component = ({
      ...other
    }: Partial<CProps> = {}): string => (
      createComponent({
        HTMLTag,
        attributes,
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
          Component(),
          InputLabel({ label, autoFocus }),
        ],
      })
      : Component({ tabIndex, autoFocus });
  });

type InputComponentBuilder<P> =
  (props: InputComponentBuilderProps) => ComponentFunction<P>;

interface InputComponentBuilderProps {
  HTMLTag: string;
  attributes?: ComponentAttributes;
}

interface CProps extends ComponentProps {
  label?: string;
  attributes?: ComponentAttributes;
}

interface ComponentAttributes extends ElementAttributes {
  type?: InputType;
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