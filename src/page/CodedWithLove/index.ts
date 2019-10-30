/* eslint-disable @typescript-eslint/no-var-requires */
import { Badge } from '../../components';

const leftColorBadge = 'transparent';
const rightColorBadge = 'transparent';

const heartSvg = require('../../static/icons/heart.svg');
const className = 'badge';
const defaultStyle = {
  fontSize: '14px',
  letterSpacing: '.5px',
  lineHeight: '1.5em',
  color: 'inherit',
};

const defaultPadding = '2px';

export const CodedWithLove: ComponentFunction<CodedWithLoveProps> = (
  ({
    text,
    flex = {},
    style = {},
    TextProps: { style: textStyle = {}, ...textOtherProps } = {},
  }) => {
    return Badge({
      colorLeft: leftColorBadge,
      colorRight: rightColorBadge,
      valueLeft: text,
      className,
      flex: {
        alignSelf: 'flex-end',
        ...flex,
      },
      style: {
        ...defaultStyle,
        ...style,
      },
      TextProps: {
        style: {
          padding: defaultPadding,
          ...textStyle,
        },
        ...textOtherProps,
      },
      RightRectProps: {
        children: [ heartSvg ],
      },
    });
  }
);

interface CodedWithLoveProps {
  text: string;
}
