const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = () => {
  const env = dotenv.config().parsed;

  return {
    entry: './src/client/App.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: `postcss-loader`,
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: './index.html',
        template: './src/client/ui.html',
      }),
      new MiniCssExtractPlugin(),
      new CopyWebPackPlugin([{ from: './src/client/assets', to: './assets' }]),
      new webpack.EnvironmentPlugin(env),
    ],
  };
};
