import { PageContentMySQL } from '../mysql.types';
import { WelcomeContent } from './';

type WelcomeMySQL =
  PageContentMySQL & { [P in keyof WelcomeContent]: string };

export const mySQL: WelcomeMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
  noScript: 'field1',
};

export default mySQL;
