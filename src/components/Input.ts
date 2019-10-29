import { InputBuilder } from '../builders/';

export const Input: ComponentFunction<InputProps> =
  InputBuilder({
    HTMLTag: 'input',
    attributes: {
      type: 'text' as HTMLInputType,
    },
  });

interface InputProps {
  label?: string;
  attributes: HTMLInputElementAttributes;
}
