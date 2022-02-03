# `okTurtles.data`

Creates a key-value based in-memory datastore.

Offers basic set/get/delete actions, and a more interesting `/apply` selector that can be used where normally an instance from OOP would be used.

See [`index.test.js`](index.test.js) for usage examples.

Install:

```
$ npm install --save @sbp/okTurtles.data
```

Usage:

```js
import '@sbp/okTurtles.data'
```

Registers the following selectors. Self-explanatory except for `/apply`:

- `'okTurtles.data/get'`
- `'okTurtles.data/set'`
- `'okTurtles.data/delete'`
- `'okTurtles.data/add'`
- `'okTurtles.data/remove'`
- `'okTurtles.data/apply'` - applies a function to the value of a given key.

## History

See [HISTORY.md](HISTORY.md).

## License

AGPL-3.0.

See [LICENSE.txt](LICENSE.txt).
