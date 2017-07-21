module.exports = {
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/
      }
    },
    extra: {
      resolve: {
        extensions: ['.js', 'index.js', '.jsx'],
      }
    }
  },
  type: 'react-app',
}
