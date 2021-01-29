module.exports = {
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
