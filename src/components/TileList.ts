import { Tile } from './';

const tileListClassName = 'list-tiles';

export const TileList: ComponentFunction<TileListProps> = (
  ({ items, className, flex, ...otherProps }) => {
    return createComponent({
      HTMLTag: 'ul',
      flex: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        ...flex,
      },
      children: items.map((tileProps) => Tile(tileProps)),
      className: className
        ? `${ tileListClassName } ${ className }`
        : tileListClassName,
      ...otherProps,
    });
  }
);

interface TileListProps {
  items: ComponentProps[];
}
