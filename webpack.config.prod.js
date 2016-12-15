var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //devtool: 'source-map',
  entry: {
    main: './src/main'
    //vendors: ['react','jquery']
  },
  output: {
    path: path.join(__dirname, 'static/'),
    filename: 'scripts/bundle.js',
    publicPath: ''
    //chunkFilename: "[name].min.js" 按需打包
  },
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("styles/styles.css")
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
  ],
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel'],
        include: path.join(__dirname,'/src')
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=./i/[name].[ext]'
      },
      {
        test : /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract("style-loader","css!sass")
      },
      /*{
        test: /\.scss$/, 
        loader: "style!css!sass"
      },
      {
        test: /\.less$/, 
        loader: "style!css!less"
      },*/
    ]
  }
};
