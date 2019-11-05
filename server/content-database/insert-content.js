const { contentPrefix } = require('./_constants');
const { insert } = require('../database/');

const insertContent = async (tableName = contentPrefix) => {
  const content = await require('../content/');

  Object.keys(content).forEach(contentName => {
    const [ texts, mappedFields ] = content[contentName];

    Object.keys(texts).forEach(lang => {
      const textItems = texts[lang];
      const textItemsKeys = Object.keys(textItems);

      const values = textItemsKeys
        .map(textItem => {
          const text = textItems[textItem];
          if (Array.isArray(text)) {
            return text.join(', ');
          }

          return text || '';
        });

      const columns = textItemsKeys
        .map(textItem => (mappedFields || {})[textItem] || '');

      insert(
        `${ tableName }_${ lang }`,
        contentName,
        columns,
        values,
      );
    });
  });
};

module.exports = insertContent;
