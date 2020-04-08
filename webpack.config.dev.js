const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js/",
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    port: 4000,
  },
};
