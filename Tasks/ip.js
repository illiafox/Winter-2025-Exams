'use strict';

// Splits ip
const parseIPV4 = (input) => {
  if (!input || typeof input !== 'string') return undefined;

  const parts = input.split('.');

  const IPV4_PARTS_COUNT = 4; // xxx.xxx.xxx.xxx
  if (parts.length !== IPV4_PARTS_COUNT) return undefined;

  const result = parts.map((part) => {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255 || part === '') return null;
    return num;
  });

  if (result.includes(null)) return undefined;

  // consistent-return rule works incorrectly here
  /* eslint-disable-next-line consistent-return */
  return result;
  /* eslint-disable-next-line consistent-return */
};

module.exports = parseIPV4;
