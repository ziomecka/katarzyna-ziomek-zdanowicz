import { KnowledgeContent } from './';
import { PageContentMySQL } from '../mysql.types';

type KnowledgeMySQL =
  PageContentMySQL & { [P in keyof KnowledgeContent]: string };

export const mySQL: KnowledgeMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
  hardContent: 'field1',
  softContent: 'field2',
  softList: 'field3',
  hardList: 'field4',
};

export default mySQL;
