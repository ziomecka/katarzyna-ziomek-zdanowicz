export const Header: ComponentFunction = (
  (props = {}) => {
    return createComponent({
      componentId: 'header',
      HTMLTag: 'header',
      ...props,
    });
  }
);
