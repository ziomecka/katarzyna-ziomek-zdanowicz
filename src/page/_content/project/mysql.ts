import { PageContentMySQL } from '../mysql.types';
import { ProjectContent } from './';

type ProjectMySQL =
  PageContentMySQL & { [P in keyof ProjectContent]: string };

export const mySQL: ProjectMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
};

export default mySQL;
