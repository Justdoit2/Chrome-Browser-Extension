const path = require('path');

module.exports = {
  entry: './popup/popup.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve:{
    extensions:['js','.jsx']
  },
  devtool: 'cheap-module-source-map' // Avoids using eval()
};
