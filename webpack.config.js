const path = require('path');

module.exports = {
  entry: './content-scripts/app.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};