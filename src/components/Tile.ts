const tileClassName = 'tile';

export const Tile: ComponentFunction = ({
  className,
  children,
  flex,
  attributes,
  ...otherProps
}) => {
  return createComponent({
    HTMLTag: 'li',
    className: className ? `${ tileClassName }${ className }` : tileClassName,
    children,
    attributes,
    ...otherProps,
    flex: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...flex,
    },
  });
};
