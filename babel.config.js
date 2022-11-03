module.exports = {
  extends: '@shelf/babel-config/frontend-library',
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        regenerator: true,
        useESModules: true,
        absoluteRuntime: false,
      },
    ],
  ],
};
