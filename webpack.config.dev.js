var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'scripts/bundle.js',
    publicPath: '/static/'
  },
  babel: {
    presets: [ 'react', 'es2015', 'stage-0'],
    plugins: ['transform-runtime']
    //plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("static/styles/styles.css")
  ],
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel?sourceMap'],
        include: path.join(__dirname, 'src')
      },
      {   
        test: /\.css$/, 
        loader: 'style-loader!css-loader?sourceMap' 
      },
      {   
        test: /\.scss$/,
        loader: "style!css!sass?sourceMap"
        //loader: ExtractTextPlugin.extract("style-loader", "css!sass", 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]')
      },
      {   
        test: /\.less$/, 
        loader: "style!css!less?sourceMap"
      },
      { test: /\.(png|jpg|gif)$/, loader: "file-loader" },
      { 
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  }
};
