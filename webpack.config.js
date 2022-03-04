const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode
  mode: "development",

  // for source map debugging
  devtool: "eval-source-map",

  // entry
  entry: path.resolve(__dirname, "src", "index.tsx"),

  // output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // resolve for ts and js
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  // module
  module: {
    rules: [
      // js
      {
        test: /\.(js?|jsx?)$/,
        // exclude: /node_module/,
        use: ["babel-loader"],
      },
      // ts
      {
        test: /\.(ts?|tsx?)$/,
        // exclude: /node_modules/,
        use: ["ts-loader"],
      },
      // html
      {
        test: /\.hmtl/,
        use: ["html-loader"],
      },
      // css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // sass
      {
        test: /\.(s[ac]ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // file loader font
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "/fonts/[name].[ext]",
          },
        },
      },
      // file loader img
      {
        test: /\.(jpg|jpeg|png|gif|svg|JPG)$/i,
        type: "asset/resource", // for react - if use below method it's gonna go to infinite loop
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "/images/[name].[ext]",
        //   },
        // },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
