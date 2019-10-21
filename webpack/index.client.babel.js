import * as path from 'path';
import {
  extractSass,
  plugins,
} from './plugins';
import common from './index.common.babel';
import { isProduction } from './constants';
import merge from 'webpack-merge';

const outputPath = isProduction
  ? path.resolve(__dirname, '../bundleServerProd/')
  : path.resolve(__dirname, '../bundleServerDev/');

module.exports = merge(common, {
  output: {
    path: outputPath,
    filename: '[name].js',
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
            'sass-loader',
          ],
        }),
      },
    ],
  },
});
