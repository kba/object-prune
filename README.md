object-prune
============
Prune objects from non-values

## Install

```sh
npm install --save object-prune
```

## Usage

```js
const prune = require('object-prune')
```

### `prune(obj)`

Walk an object recursively and remove

* keys with [empty string values](#pruneemptystringsobj)
* keys with [object values without keys](#pruneemptyobjectsobj)
* keys with [array values without elements](#pruneemptyarraysobj)

```js
prune({one: "", two: [], three: {}, four: 4}) // # {four: 4}
```

### `prune.emptyStrings(obj)`

```js
prune({one: "", two: [], three: {}, four: 4}) // # {two: [], three: {}, four: 4}
```

### `prune.emptyArrays(obj)`

```js
prune({one: "", two: [], three: {}, four: 4}) // # {one: "", three: {}, four: 4}
```

### `prune.emptyObjects(obj)`

```js
prune({one: "", two: [], three: {}, four: 4}) // # {one: "", two: [], four: 4}
```

