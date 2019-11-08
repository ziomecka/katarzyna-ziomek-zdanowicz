import {
  Content,
  List,
  Typography,
  TypographyVariant,
} from '../../components';
import { KnowledgeContent } from '../_content/types';

const listClassName = 'list--knowledge';
const listItemClassName = 'listItem--box';

export const Knowledge: ComponentFunction<KnowledgeProps> = ({
  content: { hardContent, softContent, hardList },
  ...otherProps
}) => {
  return Content({
    ...otherProps,
    content: softContent,
    children: [
      hardContent && Typography({
        value: hardContent,
        variant: TypographyVariant.h2,
      }),
      List({
        flex: {
          justifyContent: 'center',
          flexWrap: 'wrap',
        },
        className: listClassName,
        childrenProps: hardList.map(value => ({
          className: listItemClassName,
          value,
        })),
      }),
    ],
  });
};

interface KnowledgeProps {
  headingVariant?: TypographyVariant;
  content: KnowledgeContent;
}
