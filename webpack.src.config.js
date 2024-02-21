const path = require('path');
const serverlessWebpack = require('serverless-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'server/src/main': './server/src/main.js',
    'server/src/normalize': './server/src/normalize.css',
    'server/src/style': './server/src/style.scss',
    'server/src/intro': './server/src/intro.scss',
    'server/src/profile': './server/src/profile.scss',
    'server/src/project-list': './server/src/project-list.scss',
    'server/src/project': './server/src/project.scss',
  },
  output: {
    path: path.join(__dirname, '.webpack/service'),
  },
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
};
