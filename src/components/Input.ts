import {
  InputComponentBuilder,
  InputType,
} from '../builders/';

export const Input: ComponentFunction<InputProps> =
  InputComponentBuilder({
    HTMLTag: 'input',
    attributes: {
      type: InputType.text,
    },
  });

interface InputProps {
  label?: string;
  attributes: InputAttributes;
}

interface InputAttributes extends
  ElementAttributes,
  Record<string, number | string | boolean> {
    type?: InputType;
    placeholder?: string;
    alt?: string;
    required?: boolean;
    pattern?: string;
  }
