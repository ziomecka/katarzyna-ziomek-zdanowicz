import * as path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { isProduction } from './constants';
import webpack from 'webpack';

const cleanWebpackPluginPatterns = [
  '**/*', '!static/*', '!**/*.jpg', '!**/server*.js',
];

const cleanWebpackPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: cleanWebpackPluginPatterns,
  cleanAfterEveryBuildPatterns: cleanWebpackPluginPatterns,
  verbose: true,
});

export const extractSass = new ExtractTextPlugin(
  'index.css',
  { allChunks: true },
);

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  excludeAssets: [ /server\.js$/ ],
  title: 'Katarzyna Ziomek-Zdanowicz',
  template: path.resolve(__dirname, '../src/static/index.html'),
  filename: 'template.html',
});

const { url, isBrowser } = require('./constants');
const webpackConstants = new webpack.DefinePlugin({
  'process.env.BROWSER': JSON.stringify(isBrowser),
  'process.env.URL': JSON.stringify(url),
});

const htmlExcludeAssetsPlugin = new HtmlExcludeAssetsPlugin();

const compressionPlugin = new CompressionPlugin({
  algorithm: 'gzip',
  test: /\.js(\?.*)?$/i,
  deleteOriginalAssets: true,
});

const uglifyPlugin = new UglifyJsPlugin({
  extractComments: true,
  uglifyOptions: {
    mangle: true,
  },
});

const productionPlugins = [
  compressionPlugin,
  uglifyPlugin,
];

export const plugins = [
  cleanWebpackPlugin,
  extractSass,
  htmlWebpackPlugin,
  htmlExcludeAssetsPlugin,
  webpackConstants,
].concat(isProduction ? productionPlugins : []);
