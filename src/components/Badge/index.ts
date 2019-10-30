const xmlns = 'http://www.w3.org/2000/svg';

const defaultBorderRadius = '5px';
const defaultPadding = '5px';

const defaultRectStyle = {
  borderRadius: defaultBorderRadius,
};

const leftBorderRadius = (borderRadius: string): string => (
  `${ borderRadius } 0 0 ${ borderRadius }`
);

const rightBorderRadius = (borderRadius: string): string => (
  `0 ${ borderRadius } ${ borderRadius } 0`
);

export const Badge: ComponentFunction<BadgeProps> = ({
  colorLeft,
  colorRight,
  valueLeft,
  valueRight,
  attributes,
  flex,
  style,
  RectProps: {
    style: rectStyle = defaultRectStyle,
    attributes: rectAttributes = {},
    ...rectOtherProps
  } = {},
  LeftRectProps: {
    style: leftRectStyle = defaultRectStyle,
    children: leftRectChildren = [],
    ...leftRectOtherProps
  } = {},
  RightRectProps: {
    style: rightRectStyle = defaultRectStyle,
    children: rightRectChildren = [],
    ...rightRectOtherProps
  } = {},
  TextProps: {
    style: textStyle = { padding: defaultPadding },
    attributes: textAttributes = {},
    ...textOtherProps
  } = {},
  ...otherProps
}) => {
  const createText = (value: string): string => (
    createComponent({
      HTMLTag: 'text',
      value,
      attributes: textAttributes,
      style: {
        position: 'relative',
        display: 'inline-block',
        'z-index': 10,
        ...textStyle,
      },
      ...textOtherProps,
    })
  );

  const createRect = ({
    style,
    attributes,
    ...otherProps
  }: Partial<ComponentProps>): string => (
    createComponent({
      HTMLTag: 'rect',
      attributes: {
        height: '100%',
        width: '100%',
        x: 0,
        y: 0,
        ...rectAttributes,
        ...attributes,
      },
      style: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        ...rectStyle,
        ...style,
      },
      ...rectOtherProps,
      ...otherProps,
    })
  );

  return createComponent({
    HTMLTag: 'svg',
    attributes: {
      xmlns,
      ...attributes,
    },
    style: {
      ...style,
      position: 'relative',
    },
    flex: {
      display: 'inline-flex',
      justifyContent: 'space-around',
      ...flex,
    },
    ...otherProps,
    children: [
      createComponent({
        HTMLTag: 'g',
        style: { position: 'relative' },
        children: [
          createRect({
            style: {
              fill: colorLeft,
              background: colorLeft,
              borderRadius: leftBorderRadius(
                leftRectStyle.borderRadius || rectStyle.borderRadius
              ),
            },
            ...leftRectOtherProps,
          }),
          valueLeft && createText(valueLeft),
          ...leftRectChildren,
        ],
      }),
      createComponent({
        HTMLTag: 'g',
        style: { position: 'relative' },
        children: [
          createRect({
            style: {
              fill: colorRight,
              background: colorRight,
              borderRadius: rightBorderRadius(
                rightRectStyle.borderRadius || rectStyle.borderRadius
              ),
            },
            ...rightRectOtherProps,
          }),
          valueRight && createText(valueRight),
          ...rightRectChildren,
        ],
      }),
    ],
  });
};

interface BadgeProps {
  valueLeft: string;
  valueRight: string;
  colorLeft: string;
  colorRight: string;
  borderRadius?: string;
  padding?: string;
  rectProps: ComponentProps;
  textProps: ComponentProps;
}
