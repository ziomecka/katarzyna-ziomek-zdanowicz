export const rules = [
  {
    test: /.*(tsx?)$/,
    use: [
      'babel-loader',
      'ts-loader',
    ],
  },
  {
    test: /\.(jpg|woff|woff2|ttf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.(txt)$/,
    loader: 'raw-loader',
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader',
  },
];

