const contentPrefix = 'content';
const contentFields = [
  'id varchar(300) primary key',
  'created_at timestamp default current_timestamp',
  'heading varchar(5000) CHARACTER SET UTF8',
  'title varchar(5000) CHARACTER SET UTF8 not null',
  'content text CHARACTER SET UTF8',
  'field1 text CHARACTER SET UTF8',
  'field2 text CHARACTER SET UTF8',
  'field3 text CHARACTER SET UTF8',
  'field4 text CHARACTER SET UTF8',
  'field5 text CHARACTER SET UTF8',
  'field6 text CHARACTER SET UTF8',
  'field7 text CHARACTER SET UTF8',
  'field8 text CHARACTER SET UTF8',
  'field9 text CHARACTER SET UTF8',
];

module.exports = {
  contentFields,
  contentPrefix,
};
