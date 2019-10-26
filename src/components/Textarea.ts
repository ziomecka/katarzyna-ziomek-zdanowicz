import { InputComponentBuilder } from '../builders/';

export const Textarea: ComponentFunction<TextareaProps> =
  InputComponentBuilder({ HTMLTag: 'textarea' });

interface TextareaProps{
  label?: string;
  attributes: TextareaAttributes;
}

interface TextareaAttributes extends
  ElementAttributes,
  Record<string, number | string | boolean> {
    placeholder?: string;
    alt?: string;
    required?: boolean;
    Rows?: number;
  }
