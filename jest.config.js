/** @type {import('ts-jest').JestConfigWithTsJest} */
process.env.TZ = 'UTC';

const config = {
  coverageReporters: ['clover', 'text'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  // Allow TS sources that use `.js` extensions in ESM-style imports to resolve to `.ts` files in tests
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
export default config;
