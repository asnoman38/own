# Own

A utility for creating own properties objects.

## Installation

```
$ npm install own
```

## Usage

```js
var own = require('own');

return Object.create(prototypeProperties, own(ownProperties));
```

## Tests

Install the dependencies and run.

```
$ npm install
$ npm test
```