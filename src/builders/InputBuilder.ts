import {
  Box,
  InputLabel,
} from '../components/';

export const InputBuilder: InputBuilder<InputProps> = ({
  HTMLTag = 'input',
}): ComponentFunction<InputProps> => (
  ({
    label,
    attributes,
    attributes: { tabIndex = -1, autoFocus = false } = {},
    ...otherProps
  } = {}): string => {


    const Component = ({
      ...other
    }: Partial<InputProps> = {}): string => (
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
          InputLabel({ label }),
        ],
      })
      : Component({ attributes });
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
