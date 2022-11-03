const jestCommon = require('../../jest.config');

module.exports = {
  ...jestCommon,
  setupFilesAfterEnv: [],
  coveragePathIgnorePatterns: ['types/index.ts'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
