const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist/public');

module.exports = {
  entry: path.resolve(SRC, 'client/index.js'),

  output: {
    pathinfo: true,
    path: DIST,
    filename: 'bundle.[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/public/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new ManifestPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
