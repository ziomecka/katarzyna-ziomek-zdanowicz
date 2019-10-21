const requiredLabel = 'label--required';
const placeholderLabel = 'label-placeholder';

export const InputLabel: ComponentFunction<LabelProps> = ({
  label, id, placeholder, required, ...otherProps
}) => {

  return createComponent({
    HTMLTag: 'label',
    componentId: 'label',
    attributes: id ? { for: id } : {},
    value: label,
    className: `${ placeholder ? placeholderLabel : '' }` +
      ` ${ required ? requiredLabel : '' }`,
    ...otherProps,
  });
};

interface LabelProps {
  label: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
}
