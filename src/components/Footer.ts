export const Footer: ComponentFunction = (
  ({ style, flex, ...otherProps } = {}) => (
    createComponent({
      componentId: 'footer',
      HTMLTag: 'footer',
      ...otherProps,
      style,
      flex: { alignItems: 'center', ...flex },
    })
  )
);
