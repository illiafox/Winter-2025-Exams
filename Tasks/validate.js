'use strict';

// Valid person name
// 	1.	Only english alphabetic characters.
// 	2.	At least two words.
// 	3.	Words are separated with a single space.
const validPersonNamePattern = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
const isValidPersonName = (name) => validPersonNamePattern.test(name);

module.exports = isValidPersonName;
