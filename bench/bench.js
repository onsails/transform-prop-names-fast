const Benchmark = require('benchmark');
const { toCamelCasePropertyNames, toSnakeCasePropertyNames } = require('../src');

const object = {
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
}

let suite = new Benchmark.Suite();

suite.add('toCamelCasePropertyNames:Deep object', function() {
  toCamelCasePropertyNames(object.snake);
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': true });

suite = new Benchmark.Suite();

suite.add('toSnakeCasePropertyNames::Deep object', function() {
  toSnakeCasePropertyNames(object.camel);
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': true });

