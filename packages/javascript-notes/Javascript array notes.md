# Javascript array notes
#use/javascript

[[array and list operations]]
**source** A mix of MDN and my own examples and explanations

see https://github.com/khu-md/TestFirst-Review-V2/tree/master/classes/01-array-prototype for some examples of me reimplementing reduce, map, and filter.

* [Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
_Concatenation_ means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays.

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

* [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	* filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map,  it does this without needing to modify the original array.
	* The callback function accepts three arguments. The first argument is the  current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

**Example**
Both of these implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b`.
`arrayDiff([1,2],[1]) == [2]`

If a value is present in b, all of its occurrences must be removed from the other:
`arrayDiff([1,2,2,2,3],[2]) == [1,3]`

```javascript
Test.describe("Sample tests", function() {
  Test.it("Should pass Sample tests", function() {
    Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
    Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
  });
}); 
```

**Using filter**
```javascript
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
```

**Implement same function as a for loop**
```javascript
function arrayDiff(a, b) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}
```

* [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
Executes a callback function using each element of an array passed into it as an argument. It does not mutate the original array. It also does not return a new array or anything at all. It returns undefined.

Syntax: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`

```javascript
// Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//     '<li class="text-warning">var-on-top</li>',
//       '<li class="text-warning">linebreak</li>'
//       ]

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  // Only change code below this line

  const resultDisplayArray = [];

  arr.forEach(function(item){
    resultDisplayArray.push(`<li class="text-warning">${item}</li>`);
  });

  // Only change code above this line
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
```

* [Array.prototype.indexOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
	* Since arrays can be changed, or _mutated_, at any time, there’s no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

* Array.prototype.join()

**example**
`sentensify(“May-the-force-be-with-you”)` should return
`May the force be with you`.
```javascript
function sentensify(str) {
  // Only change code below this line
  return str.split(/[\s,.-]/).join(“ “);
  // Only change code above this line
}
sentensify(“May-the-force-be-with-you”);
```

* [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	* syntax `arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])`
	* The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
	* The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
	* In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
	* **Fun fact** The reduce method allows for more general forms of array processing, and it’s possible to show that both filter and map can be derived as special applications of reduce.

* [Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-> shallow copy of array from `begin` to `end` (not included)

If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

* [Array.prototype.splice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

`let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, …]]]])`

If _deleteCount_ is omitted, or if its value is equal to or larger than _array_.length - _start_ (that is, if it is equal to or greater than the number of elements left in the array, starting at _start_), then all the elements from _start_ to the end of the array will be deleted.

modified array in place from `start` and may:
-> delete `deleteCount` elements
-> add `item1` , `item2` to the array

* Array.prototype.sort()

The sort method sorts the elements of an array according to the callback function, i.e. a compareFunction.

It takes two arguments representing any two elements of the array.
By way of example, if
	* compareFunction(a,b) returns less than 0 -> a comes before b
	* greater than 0 -> b comes before a
	* 0 -> sort order remains unchanged

JavaScript’s default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

	* In the case of alphabetical order when comparing strings, the default sort without a supplied custom compare function will do because Unicode point values are in alphabetical order. I think…