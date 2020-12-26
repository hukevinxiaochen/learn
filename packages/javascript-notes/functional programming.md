# functional programming
#study/programming

[[Study Web Development - Fullstack]]

**Find example code here**
TestFirst 07

## Currying and Partial application
The _arity_ of a function is the number of arguments it requires. _Currying_ a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

**Example**
```javascript
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
```

This is useful in your program if you can’t supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it’s available. Here’s an example using the curried function in the example above:

```javascript
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, _partial application_ can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here’s an example:

```javascript
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

#use/javascript
**example**
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don’t use replace. Here are the requirements:
The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces

```javascript
// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return title.split(/\s+/).filter( w => w.length > 0 ).map( w => w.toLowerCase() ).join("-");
}
```

#use/python
[functools — Higher-order functions and operations on callable objects — Python 3.8.2 documentation](https://docs.python.org/3/library/functools.html#module-functools)
[Primer on Python Decorators – Real Python](https://realpython.com/primer-on-python-decorators/)
[Building an ETL Pipeline in Python - Towards Data Science](https://towardsdatascience.com/building-an-etl-pipeline-in-python-f96845089635)
[Functional Programming with Python for People Without Time](https://medium.com/@jondot/functional-programming-with-python-for-people-without-time-1eebdbd9526c)