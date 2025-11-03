# `okTurtles.data`

Creates an in-memory key-value datastore for [SBP](https://github.com/okTurtles/sbp-js).

Offers basic set/get/delete actions, and a more interesting `/apply` selector that can be used where normally an instance from OOP would be used.

See [`index.test.ts`](src/index.test.ts) for usage examples.

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
- `'okTurtles.data/iterKeys'`
- `'okTurtles.data/keyCount'`

## History

See [HISTORY.md](HISTORY.md).

## License

[MIT](LICENSE.txt).
