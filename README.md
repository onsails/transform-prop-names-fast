# Transform the case of object property names

Transform objects so that all property names are `camelCased` or `snake_cased`.
Accepts objects and arrays of objects, of any shape and depth.

Example:

```js
import { toCamelCasePropertyNames } from 'transform-prop-names';

const snakeCasedData = { user_id: 1, name: 'John', avatar_url: null };

toCamelCasePropertyNames(snakeCasedData);
//=> { userId: 1, name: 'John', avatarUrl: null }
```

## API

### `toCamelCasePropertyNames(value)`

Make all property names `camelCased`.

- `value` - object, array of objects

- Returns: The same object or array of objects will be returned, with all
  property names camel-cased.

### `toSnakeCasePropertyNames(value)`

Make all property names `snake_cased`.

- `value` - object, array of objects

- Returns: The same object or array of objects will be returned, with all
  property names snake-cased.

## Contributing

Contributions are indeed welcome. Feel free to open a PR, and make sure to run
`npm run test` and `npm run lint` while doing so!
