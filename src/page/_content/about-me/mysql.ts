import { AboutMeContent } from './';
import { PageContentMySQL } from '../mysql.types';

type AboutMeMySQL = PageContentMySQL & { [P in keyof AboutMeContent]: string };

const mySQL: AboutMeMySQL = {
  'heading': 'heading',
  'title': 'title',
  'content': 'content',
  'iconLink': 'field1',
};

export default mySQL;
