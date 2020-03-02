module.exports = {
   entry: './src/app.js',
   output: {
      path: require('path').join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   mode: "development",
   module: {
      rules: [{
         loaders: "babel-loader",
         test: /\.jsx?$/,
         exclude: /node_modules/
      }, {
         teste: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
   }
}