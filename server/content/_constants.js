const path = require('path');

const contentPrefix = 'content';
const contentFields = [
  'name varchar(300) primary key',
  'created_at timestamp default current_timestamp',
  'heading varchar(5000)',
  'title varchar(5000) not null',
  'content text',
  'field1 text',
  'field2 text',
  'field3 text',
  'field4 text',
  'field5 text',
  'field6 text',
  'field7 text',
  'field8 text',
  'field9 text',
];

const contentPath = path.resolve(__dirname, '../../src/page/_content/');

module.exports = {
  contentFields,
  contentPath,
  contentPrefix,
};
