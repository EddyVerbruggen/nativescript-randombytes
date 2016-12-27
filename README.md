# NativeScript randombytes shim

## Installation
```sh
tns plugin add nativescript-randombytes
```

## Usage

```js
var randomBytes = require('nativescript-randombytes');

// sync
console.log("randomBytes: " + randomBytes(16));

// async
randomBytes(16, function (result) {
  console.log("randomBytes async: " + result);
})
```