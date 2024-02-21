const path = require('path');
const serverlessWebpack = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // entry를 따로 설정하지 않아도 됨
  entry: {
    ...serverlessWebpack.lib.entries,
  },
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
