import { isProduction } from './constants';
import { rules } from './rules';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: !isProduction ? 'source-map' : false,
  resolve: {
    mainFiles: [ 'index' ],
    extensions: [ '.js', '.ts', '.json' ],
    modules: [ 'node_modules' ],
  },
  node: { fs: 'empty' },
  module: { rules },
  watchOptions: {
    ignored: [ 'node_modules' ],
  },
};
