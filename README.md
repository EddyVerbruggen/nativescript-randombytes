# NativeScript randombytes shim
The [randombytes package](https://www.npmjs.com/package/randombytes) doesn't work in the {N} runtime, so replace it by this package if you need to.

## Installation
```sh
tns plugin add nativescript-randombytes
```

## Usage

```js
var randomBytes = require('nativescript-randombytes');

// sync usage
console.log("randomBytes: " + randomBytes(16));

// async usage
randomBytes(16, function (ignore, result) {
  console.log("randomBytes async: " + result);
})
```