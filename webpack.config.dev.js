const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
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
    path: path.resolve(__dirname, "public/js/"),
    filename: "bundle.js",
  },
};
