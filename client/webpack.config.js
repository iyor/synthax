var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' }
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "public",
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
};
