const path = require('path');

module.exports = {
  entry: {
    app: './js/greeting.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/greeting.js',
  },
};
