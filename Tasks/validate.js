'use strict';

// Validates person name
const isValidPersonName = (name) => /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name);

module.exports = isValidPersonName;
