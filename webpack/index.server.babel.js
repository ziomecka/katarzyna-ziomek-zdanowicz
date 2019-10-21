import * as path from 'path';
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
    libraryTarget: 'commonjs',
  },
  entry: {
    server: path.resolve(__dirname, '../src/server.ts'),
  },
});
