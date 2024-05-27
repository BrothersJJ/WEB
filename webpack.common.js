const path = require('path');

module.exports = {
  entry: {
    app: './js/login.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/login.js',
  },
};
