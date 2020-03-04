const path = require('path');

module.exports = {
   entry: './src/app.jsx',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   mode: "development",
   module: {
      rules: [{
         loaders: "babel-loader",
         test: /\.jsx?$/,
         exclude: /node_modules/
      }, {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   resolve: {
      extensions: [
         '.js',
         '.jsx'
      ]
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
   }
}