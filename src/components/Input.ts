import { InputBuilder } from '../builders/';

export const Input: ComponentFunction<InputProps> =
  InputBuilder({
    HTMLTag: 'input',
    attributes: {
      type: InputType.text,
    },
  });

interface InputProps {
  label?: string;
  attributes: HTMLInputElementAttributes;
}
