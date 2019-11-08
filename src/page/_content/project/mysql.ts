import { PageContentMySQL } from '../mysql.types';
import { ProjectContent } from './';

type ProjectMySQL =
  PageContentMySQL & { [P in keyof ProjectContent]: string };

export const mySQL: ProjectMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
  contentOne: 'field1',
  contentTwo: 'field2',
  packagesList: 'field3',
};

export default mySQL;
