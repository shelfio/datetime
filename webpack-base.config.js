const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
];

if (process.env.ANALYZE) {
  const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: '../stats.json',
    })
  );
}

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  output: {
    publicPath: '',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  externals: [nodeExternals({modulesDir: '../../node_modules'})],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            extends: '@shelf/babel-config/frontend-component',
          },
        },
      },
      {
        test: /\.worker\.(c|m)?(j|t)s$/i,
        use: [
          {
            loader: 'worker-loader',
            options: {inline: 'fallback'},
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              extends: '@shelf/babel-config/frontend-component',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
        ],
      },
      // https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
