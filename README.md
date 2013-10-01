# Own

Creates an enumerable and writable `propertiesObject` from an object literal. The object corresponds to the second argument of [`Object.defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties).

[![Build Status](https://secure.travis-ci.org/christophercliff/own.png?branch=master)](https://travis-ci.org/christophercliff/own)

## Installation

```
$ npm install own
```

## Usage

```js
Use `own` it with [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) to create a simple factory function:

```js
var own = require('own')

function create(options) {
    return Object.create(YOUR_PROTOTYPE, own(options))
}
```

Create readonly objects as well:

```
var readonlyObject = own.readonly({ foo: 'foo' })
readonlyObject.foo.writable // false
```

## Tests

Install the dependencies and run:

```
$ npm test
```
