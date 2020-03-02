module.exports = {
   entry: './src/app.js',
   output: {
      path: require('path').join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
   }
}