'use strict';

// Returns array without listed values
const skip = (array, ...removeItems) =>
  array.filter((item) => !removeItems.includes(item));

module.exports = skip;
