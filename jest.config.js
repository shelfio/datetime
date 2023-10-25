/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  coverageReporters: ['clover', 'text'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  preset: 'ts-jest/presets/default-esm',
  resolver: 'ts-jest-resolver',
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
