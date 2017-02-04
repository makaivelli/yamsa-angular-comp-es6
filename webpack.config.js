var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV == 'test'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate-loader!babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        loader: 'url-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
  config.devtool = 'source-map';
}

module.exports = config;
