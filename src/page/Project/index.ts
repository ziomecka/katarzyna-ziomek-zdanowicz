import {
  Content,
  List,
  TypographyVariant,
} from '../../components';
import { ProjectContent } from '../_content/types';

const listClassName = 'list--paragraph';
const contentClassName = 'content-story';

export const Project: ComponentFunction<ProjectProps> = ({
  content: { contentOne, contentTwo, packagesList },
  ...otherProps
}) => {
  return Content({
    ...otherProps,
    children: [
      contentOne && Content({
        content: contentOne,
        className: contentClassName,
      }),
      packagesList.length && Content({
        className: contentClassName,
        children: [
          List({
            className: listClassName,
            childrenProps: packagesList.map(([ href, value ]) => {
              return {
                children: [ createComponent({
                  HTMLTag: 'a',
                  attributes: { href },
                  value,
                }) ],
              };
            }),
          }),
        ],
      }),
      contentTwo && Content({
        content: contentTwo,
        className: contentClassName,
      }),
    ],
  });
};

interface ProjectProps {
  headingVariant?: TypographyVariant;
  content: ProjectContent;
}
