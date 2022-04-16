const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  
  devtool: "inline-source-map",
  
  mode: "development",
  
  devServer: {
    host: 'localhost',
    static: {
      publicPath: '/',
      directory: path.join(__dirname, './client'),
    },
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      '/api/*': {
        'target': 'http://localhost:8000',
        'secure': false,
        'changeOrigin': true,
      },
      '/search/*': {
        'target': 'http://localhost:8000',
        'secure': false,
        'changeOrigin': true,
      },
      '/auth/*': {
        'target': 'http://localhost:8000',
        'secure': false,
        'changeOrigin': true,
      },
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
        exclude: /node_modules/,
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