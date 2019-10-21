export const List: ComponentFunction<ListProps> =
({ items, ItemsProps = {}, ...otherProps }) => {
  return createComponent({
    HTMLTag: 'ul',
    children: items.map(value => (
      createComponent({
        HTMLTag: 'li',
        value,
        ...ItemsProps,
      })
    )),
    ...otherProps,
  });
};

interface ListProps {
  items: string[];
  ItemsProps?: HTMLElementProps;
}
