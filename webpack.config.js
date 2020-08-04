const path = require('path');

module.exports = {
  entry: './content-scripts/request.js',
  output: {
    filename: 'request.js',
    path: path.resolve(__dirname, 'dist'),
  },
};