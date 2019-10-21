export const IconButton: ComponentFunction =
({ ...otherProps }) => {
  return createComponent({
    componentId: 'iconButton',
    HTMLTag: 'button',
    ...otherProps,
  });
};
