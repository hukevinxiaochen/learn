# rest parameters
#use/javascript

[[Study Web Development - Fullstack]]

Used to pass an arbitrary number of arguments to a function as follows:

```javascript
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

**Source** [Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread)