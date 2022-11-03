module.exports = {
  testEnvironment: 'jsdom',
  coverageReporters: ['clover', 'text'],
  modulePathIgnorePatterns: ['__test__'],
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
