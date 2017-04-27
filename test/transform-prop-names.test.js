/* eslint-env jest */

import { toCamelCasePropertyNames, toSnakeCasePropertyNames } from '../src';

const testCases = {
  Object: {
    camel: { userId: 1, name: 'John', avatarUrl: null },
    snake: { user_id: 1, name: 'John', avatar_url: null },
  },
  'Array of objects': {
    camel: [{ userId: 1, name: 'John', avatarUrl: null }, { userId: 2 }],
    snake: [{ user_id: 1, name: 'John', avatar_url: null }, { user_id: 2 }],
  },
  'Deep object': {
    camel: {
      userId: 1,
      friends: [
        { userId: 3 },
        { userId: 4, friends: [{ userId: 5 }] },
      ],
    },
    snake: {
      user_id: 1,
      friends: [
        { user_id: 3 },
        { user_id: 4, friends: [{ user_id: 5 }] },
      ],
    },
  },
};

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
