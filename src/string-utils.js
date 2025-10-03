/**
 * String utility functions
 */

/**
 * Capitalize the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (!str || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverse a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  if (!str) {
    return str;
  }
  return str.split('').reverse().join('');
}

/**
 * Check if a string is a palindrome
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  if (!str) {
    return true;
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Count the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Number of words
 */
function countWords(str) {
  if (!str || str.trim().length === 0) {
    return 0;
  }
  return str.trim().split(/\s+/).length;
}

/**
 * Truncate a string to a specified length
 * @param {string} str - Input string
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated string with ellipsis if needed
 */
function truncate(str, maxLength) {
  if (!str || str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + '...';
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  countWords,
  truncate
};
