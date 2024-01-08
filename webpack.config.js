const path = require('path');
const serverlessWebpack = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // entry를 따로 설정하지 않아도 됨
  entry: serverlessWebpack.lib.entries,
  target: 'node',
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  // webpack의 critical warning 메시지를 피하기 위한 용도
  externals: [nodeExternals()],
  resolve: {
    modules: [path.resolve('./server'), 'node_modules'], // server 디렉토리 내부에서 absolute import를 사용하기 위한 용도
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './server/src', to: 'server/src' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
