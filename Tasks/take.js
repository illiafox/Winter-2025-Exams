// Copies all listed keys from dictionary
const take = (dict, ...keysToKeep) => {
  const result = {};

  for (const key of keysToKeep) {
    if (key in dict) {
      result[key] = dict[key];
    }
  }

  return result;
};

module.exports = take;
