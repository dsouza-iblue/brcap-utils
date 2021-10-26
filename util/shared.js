const isString = fn => typeof fn === 'string';

const isUndefined = obj => typeof obj === 'undefined';

const isNil = obj => isUndefined(obj) || obj === null;

const isObject = fn => !isNil(fn) && typeof fn === 'object';

module.exports = {
  isString,
  isUndefined,
  isNil,
  isObject,
};
