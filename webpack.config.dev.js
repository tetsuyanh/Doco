const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['@babel/polyfill', './src/js/index.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    openPage: '',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 4000,
  },
};
