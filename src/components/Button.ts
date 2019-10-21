export const Button: ComponentFunction<ButtonProps> =
({ label, ...otherProps }) => {
  return createComponent({
    componentId: 'button',
    HTMLTag: 'button',
    value: label,
    ...otherProps,
  });
};

interface ButtonProps {
  label: string;
}
