const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
  context: __dirname + '/client/js',
  entry: {
    core: './core.js',
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
};
