import { InputBuilder } from '../builders/';

export const Textarea: ComponentFunction<TextareaProps> =
  InputBuilder({ HTMLTag: 'textarea' });

interface TextareaProps{
  label?: string;
  attributes: HTMLTextareaElementAttributes;
}
