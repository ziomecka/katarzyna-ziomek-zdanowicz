/* eslint-disable no-console */
const fs = require('fs');

const ssr = ({ htmlString, htmlId = 'id="root"', htmlPath }) => {
  try {
    const fileContent = fs.readFileSync(htmlPath).toString();
    const regexp = new RegExp(`${ htmlId }[\\w\\s-]*>`);
    const [ match ] = fileContent.match(regexp);

    if (match) {
      const oldHtmlFragment =
        fileContent.slice(fileContent.search(regexp) + match.length);
      return fileContent.replace(oldHtmlFragment, htmlString + oldHtmlFragment);
    }

    console.warn('The htmlId was not found in the html document');
    return fileContent;
  } catch (err) {
    console.warn('SSR plugin: sth went wrong:', err);
  }
};

exports.ssr = ssr;
