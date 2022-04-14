const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    // Added these two 4/14
    // filename: '[name].[contenthash].js',
    // assetModuleFilename: '[name][ext]',
    filename: 'bundle.js', // removed 4/14
    // clean: true, // Fixed a few errors
  },
  devtool: 'inline-source-map', // added 4/14 fixed mapping errors
  devServer: {
    static: {
      directory: path.join(__dirname, './client'),
      publicPath: '/',
    },
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8000',
      '/search': 'http://localhost:8000',
      '/auth': 'http://localhost:8000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // this injects a script tag in the html
      // in production, we can manually write <script src="build/bundle.js"></script>
      // but in development, we're not using express so that won't work
      inject: true,
      template: path.resolve(__dirname, 'client/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
}