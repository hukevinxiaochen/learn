# Math
#use/javascript

* [[convert to number from string]]

## NaN
Not-a-Number
is a property of the _global object_
there exists a built-in function that one can call `isNaN(object)`
It is the returned value when  [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)  functions fail `Math.sqrt(-1)` or when a function trying to parse a number fails (`parseInt(“blabla”)`).

* `Math.random()` returns floating-point, pseudo-random number 0 to less than 1 with approximately uniform distribution over that range.
* `Math.floor(value)` returns an integer that represents the largest integer that is less than or equal to value.

## random number generation

`random` and `floor` to return random values betweeen 0 and 9

```javascript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
```

`parseInt` tool, which can be supplied a radix or a base number

For cryptographically secure random number generation one needs: [Crypto | Node.js v14.5.0 Documentation](https://nodejs.org/api/crypto.html#crypto_crypto)

