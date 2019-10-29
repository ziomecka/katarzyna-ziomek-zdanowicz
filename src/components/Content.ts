import {
  Typography,
  TypographyVariant,
} from './';
import { splitString } from './_utils/split-string';

const defaultHtmlTag = 'section';
const defaultHeadingVariant = TypographyVariant.h2;

const buildPropsGetter = (
  (innerHTML: boolean): ((...args: [string, TypographyVariant]) => object) => {
    return innerHTML
      ? (value, variant): object => ({ innerHTML: value, variant })
      : (value, variant): object => ({ value, variant });
  }
);

export const Content: ComponentFunction<ContentProps> = (
  ({
    HTMLTag = defaultHtmlTag,
    attributes: { tabIndex = 0, ...otherAttributes } = {},
    content = '',
    contentInnerHTML = true,
    className,
    children = [],
    column = true,
    center = true,
    captureFocus = false,
    HeadingProps: {
      heading,
      headingVariant = defaultHeadingVariant,
      headingInnerHTML,
      ...otherHeadingProps
    } = {},
    flex: flexProps,
    style,
    ...otherProps
  }) => {

    const getContentProps = buildPropsGetter(contentInnerHTML);

    const _children =
      [ ...splitString(content).map(str => (
        str ? Typography(getContentProps(str, TypographyVariant.p)) : ''
      )) ].concat(children as string[]);

    const Heading = heading
      ? Typography({
        ...buildPropsGetter(headingInnerHTML)(heading, headingVariant),
        ...otherHeadingProps,
      })
      : null;

    const position = center
      ? 'center'
      : 'flex-start';

    const flex: Flex = column
      ? {
        flexDirection: 'column',
        justifyContent: position,
        alignItems: position,
        ...flexProps,
      } : {
        justifyContent: position,
        alignItems: position,
        ...flexProps,
      };

    return createComponent({
      componentId: 'content',
      HTMLTag,
      className,
      attributes: {
        tabIndex: (captureFocus && -1) || tabIndex,
        ...otherAttributes,
      },
      ...otherProps,
      flex,
      style,
      children: [ Heading, ..._children ],
    });
  }
);

interface HeadingProps extends ComponentProps {
  heading?: string;
  headingVariant?: TypographyVariant;
  headingInnerHTML?: boolean;
}

export interface ContentProps {
  content?: string;
  contentInnerHTML?: boolean;
  column?: boolean;
  center?: boolean;
  HeadingProps?: HeadingProps;
  captureFocus?: boolean;
}
