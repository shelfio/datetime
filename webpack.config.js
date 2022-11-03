const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const pkg = require('./package');
const baseConfig = require('./webpack-base.config');

const files = fs.readdirSync('./src').filter(file => file.includes('.ts'));
const methods = files.reduce((accumulator, file) => {
  const fileName = file.split('.')[0];
  accumulator[fileName] = `./src/${file}`;

  return accumulator;
}, {});

module.exports = {
  ...baseConfig,
  entry: {
    index: './src/index',
    ...methods,
  },
  output: {
    library: pkg.name,
    path: path.resolve(__dirname, 'lib'),
    ...baseConfig.output,
  },
  externals: [nodeExternals({modulesDir: './node_modules'})],
};
