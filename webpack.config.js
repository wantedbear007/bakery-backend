
const path = require('path');
const nodeExternals = require('webpack-node-externals');


const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: './src/server.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  watch: NODE_ENV === 'development',
  externals: [ nodeExternals() ],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  }
};