const path = require('path');
const nodeExternals = require('webpack-node-externals'); // Import webpack-node-externals plugin

module.exports = {
  mode: 'production',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'final.js',
  },
  target: 'node', // Ensure Webpack targets Node.js environment
  externals: [nodeExternals()], // Exclude all node_modules from the bundle
};
