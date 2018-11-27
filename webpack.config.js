const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './client/src/'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: [['env', { modules: false }], 'react'],
          env: {
            test: {
              presets: [['env'], 'react'],
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64]',
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // this is used to proxy ports
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.HOSTNAME': JSON.stringify(process.env.USERNAME),
    //   'process.env.PORT': JSON.stringify(process.env.PORT),
    // }),
  ],
};
