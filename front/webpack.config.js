const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/scripts/app.jsx'),
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: '8000',
  },
};
