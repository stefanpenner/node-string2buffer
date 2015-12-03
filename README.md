# node-string2buffer

```js
var s2b = require('string2buffer')

s2b('') instanceof Uint8Array // => true
s2b('asdf') instanceof Uint8Array // => true
```
```js
var b2s = require('string2buffer').bufferToString;

typeof b2s(new UInt8Array(), 0, 0) === 'string' // => true
b2s(new Uint8Array([97,98,99,100], 0, 4) === 'abcd' // => true
```
