# `okTurtles.data`

Creates an in-memory key-value datastore for [SBP](https://github.com/okTurtles/sbp-js).

Offers basic set/get/delete actions, and a more interesting `/apply` selector that can be used where normally an instance from OOP would be used.

See [`index.test.js`](index.test.js) for usage examples.

Install:

```
$ npm install --save @sbp/okturtles.data
```

Usage:

```js
import sbp from '@sbp/sbp'
import '@sbp/okturtles.data'

// now you can use any of the okTurtles.data selectors
// note: you only need to import '@sbp/okturtles.data' once!
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
