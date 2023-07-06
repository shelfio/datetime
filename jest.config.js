/** @type {import('jest').Config} */
const config = {
  coverageReporters: ['clover', 'text'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  preset: 'ts-jest/presets/default-esm',
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
