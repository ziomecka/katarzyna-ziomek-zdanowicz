import {
  Box,
  InputLabel,
} from '../components/';

export const InputBuilder: InputBuilder<InputProps> = ({
  HTMLTag = 'input',
}): ComponentFunction<InputProps> => (
  ({
    label = '',
    attributes: {
      autoFocus = false,
      ...otherAttributes
    } = {},
    ...otherProps
  } = {}): string => {


    const Component = ({
      ...other
    }: Partial<InputProps> = {}): string => (
      createComponent({
        HTMLTag,
        attributes: autoFocus
          ? { autoFocus, ...otherAttributes }
          : otherAttributes,
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
        className: 'box-input',
        children: [
          Component(),
          InputLabel({ label, attributes: { for: otherAttributes.id || '' } }),
        ],
      })
      : Component();
  });

type InputBuilder<P> =
  (props: {
    HTMLTag: string;
    attributes?: HTMLInputElementAttributes;
  }) => ComponentFunction<P>;

interface InputProps {
  label?: string;
  attributes?: HTMLInputElementAttributes;
}
