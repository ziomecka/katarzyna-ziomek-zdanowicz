import { FooterContent } from './';
import { PageContentMySQL } from '../mysql.types';

type FooterMySQL = PageContentMySQL & { [P in keyof FooterContent]: string };

export const mySQL: FooterMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
  codedWithLove: 'field1',
  contact: 'field2',
  cv: 'field3',
  projects: 'field4',
};

export default mySQL;
