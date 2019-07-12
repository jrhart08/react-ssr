const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const SRC = path.resolve(__dirname, 'src/client');
const DIST = path.resolve(__dirname, 'dist/server/public');

module.exports = {
  entry: path.resolve(SRC, './index.js'),

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
