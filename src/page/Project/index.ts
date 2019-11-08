import {
  Content,
  List,
  TypographyVariant,
} from '../../components';
import { ProjectContent } from '../_content/types';

export const Project: ComponentFunction<ProjectProps> = ({
  content: { contentOne, contentTwo, packagesList },
  ...otherProps
}) => {
  return Content({
    ...otherProps,
    children: [
      contentOne && Content({ content: contentOne }),
      packagesList.length && Content({
        children: [
          List({
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
      contentTwo && Content({ content: contentTwo }),
    ],
  });
};

interface ProjectProps {
  headingVariant?: TypographyVariant;
  content: ProjectContent;
}
