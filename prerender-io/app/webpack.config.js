const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'source-map',
  
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
