export const NoScript: ComponentFunction = (
  ({ ...otherProps } = {}) => {
    return createComponent({
      HTMLTag: 'noscript',
      ...otherProps,
    });
  }
);
