// const HtmlWebpackPlugin = require('')
// const path = require('path');

// const resolvePath = (src) => {
//   return path.resolve(`../${src}`)
// }

module.exports = {
  mode: 'development',
  entry: '/index.js',
  output: {
    name: ''
  },
  devServer: {
    open: true,
    host: '0.0.0.0'
  }
}
