const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.js/, use: "babel-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      base: "/",
    }),
  ],
};
