const { snakeCase, camelCase } = require('change-case');

const applyToPropertyNames = (transform, val) => {
  let valType;
  if (val) {
    valType = val.constructor.name;
  } else {
    valType = null;
  }

  switch (valType) {
    case 'Array':
      return val.map((el) => applyToPropertyNames(transform, el));

    case 'Object': {
      const transformedObj = {};

      Object.keys(val).forEach((key) => {
        transformedObj[transform(key)] = applyToPropertyNames(transform, val[key]);
      });

      return transformedObj;
    }

    default:
      return val;
  }
};

const toCamelCasePropertyNames = (val) => applyToPropertyNames(camelCase, val);
const toSnakeCasePropertyNames = (val) => applyToPropertyNames(snakeCase, val);

module.exports = { toCamelCasePropertyNames, toSnakeCasePropertyNames };
