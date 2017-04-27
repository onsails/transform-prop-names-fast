const toCamelCase = require('camel-case');
const toSnakeCase = require('snake-case');

const getValType = (val) => {
  let valType = val::Object.prototype.toString();
  valType = valType.replace(/(?:\[object |])/g, '');
  return valType;
};

const applyToPropertyNames = (transform, val) => {
  const valType = getValType(val);

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

const toCamelCasePropertyNames = (val) => applyToPropertyNames(toCamelCase, val);
const toSnakeCasePropertyNames = (val) => applyToPropertyNames(toSnakeCase, val);

module.exports = { toCamelCasePropertyNames, toSnakeCasePropertyNames };
