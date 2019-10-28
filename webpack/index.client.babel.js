import * as path from 'path';
import {
  extractSass,
  plugins,
} from './plugins';
import common from './index.common.babel';
import merge from 'webpack-merge';
import { outputPath } from './constants';

module.exports = merge(common, {
  output: {
    path: outputPath,
    filename: '[name].[hash].js',
  },
  entry: {
    client: path.resolve(__dirname, '../src/client.ts'),
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
});
