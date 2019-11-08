export const List: ComponentFunction<ListProps> =
({ childrenProps, ...otherProps }) => {
  return createComponent({
    HTMLTag: 'ul',
    children: childrenProps.map(childProps =>
      createComponent({
        HTMLTag: 'li',
        ...childProps,
      })
    ),
    ...otherProps,
  });
};

interface ListProps {
  childrenProps: ComponentProps[];
}
