export const Box: ComponentFunction = (
  ({ HTMLTag = 'div', ...otherProps } = {}) => {
    return createComponent({
      componentId: 'box',
      HTMLTag,
      ...otherProps,
    });
  }
);
