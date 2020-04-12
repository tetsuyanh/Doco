const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/js/index.js',
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
};
