import { ContactContent } from './';
import { PageContentMySQL } from '../mysql.types';

type ContactMySQL = PageContentMySQL & { [P in keyof ContactContent]: string };

export const mySQL: ContactMySQL = {
  heading: 'heading',
  title: 'title',
  content: 'content',
  farewellHeading: 'field1',
  formButton: 'field2',
  emailLabel: 'field3',
  nameLabel: 'field4',
  messageLabel: 'field5',
};

export default mySQL;
