const placeholderClassName = 'label-placeholder';

export const InputLabel: ComponentFunction<LabelProps> = ({
  label, id, placeholder, ...otherProps
}) => {

  return createComponent({
    HTMLTag: 'label',
    componentId: 'label',
    attributes: id ? { for: id } : {},
    value: label,
    className: `${ placeholder ? placeholderClassName : '' }`,
    ...otherProps,
  });
};

interface LabelProps {
  label: string;
  id?: string;
  placeholder?: string;
}
