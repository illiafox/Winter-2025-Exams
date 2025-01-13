'use strict';

// Sums all number values in dict
const count = (obj) =>
  Object.values(obj)
    .filter((value) => typeof value === 'number')
    .reduce((sum, num) => sum + num, 0);

module.exports = count;
