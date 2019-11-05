require('@babel/register')({
  extensions: [ '.js', '.ts' ],
});

module.exports = require('./get-content')();
