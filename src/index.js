/**
 * Main entry point
 */

const mathUtils = require('./math-utils');
const stringUtils = require('./string-utils');

module.exports = {
  ...mathUtils,
  ...stringUtils
};
