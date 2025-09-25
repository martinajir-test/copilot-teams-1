module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'index.js',
    '!node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html']
};