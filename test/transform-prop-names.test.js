/* eslint-env jest */

import { toCamelCasePropertyNames, toSnakeCasePropertyNames } from '../src';

import testCases from './test-cases'

const testMethods = {
  camel: toCamelCasePropertyNames,
  snake: toSnakeCasePropertyNames,
};

const runTests = ({ from, to }) => {
  Object.keys(testCases).forEach((testName) => {
    const testCase = testCases[testName];

    test(testName, () => {
      expect(testMethods[to](testCase[from])).toEqual(testCase[to]);
    });
  });
};

describe('toCamelCasePropertyNames', () => {
  runTests({ from: 'snake', to: 'camel' });
});

describe('toSnakeCasePropertyNames', () => {
  runTests({ from: 'camel', to: 'snake' });
});
