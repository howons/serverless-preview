const path = require('path');
const serverlessWebpack = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const slsConfig = {
  // entry를 따로 설정하지 않아도 됨
  entry: serverlessWebpack.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack/service'),
    filename: '[name].js',
  },
  target: 'node',
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  // 의존성 파일을 번들링에 포함하지 않도록 함
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

const srcConfig = {
  entry: {
    main: './server/src/main.js',
    normalize: './server/src/normalize.css',
    style: './server/src/style.scss',
    intro: './server/src/intro.scss',
    profile: './server/src/profile.scss',
    'project-list': './server/src/project-list.scss',
    project: './server/src/project.scss',
    outro: './server/src/outro.scss',
  },
  output: {
    path: path.join(__dirname, '.webpack/service/server/src'),
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

module.exports = [srcConfig, slsConfig];
