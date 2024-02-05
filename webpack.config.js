const path = require('path');
const serverlessWebpack = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var configSls = {
  // entry를 따로 설정하지 않아도 됨
  entry: serverlessWebpack.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack/service'),
    filename: '[name].js',
  },
  target: 'node',
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  // webpack의 critical warning 메시지를 피하기 위한 용도
  externals: [nodeExternals()],
  resolve: {
    modules: [path.resolve('./server'), 'node_modules'], // server 디렉토리 내부에서 absolute import를 사용하기 위한 용도
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};

var configSrcJs = {
  entry: { 'server/src/main': './server/src/main.js' },
  output: {
    path: path.join(__dirname, '.webpack/service'),
  },
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
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
    ],
  },
};

var configSrcCss = {
  entry: {
    'server/src/normalize': './server/src/normalize.css',
    'server/src/style': './server/src/style.scss',
    'server/src/intro': './server/src/intro.scss',
    'server/src/profile': './server/src/profile.scss',
    'server/src/project-list': './server/src/project-list.scss',
    'server/src/portfolio': './server/src/portfolio.scss',
  },
  output: {
    path: path.join(__dirname, '.webpack/service'),
  },
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
};

module.exports = [configSls, configSrcJs, configSrcCss];
