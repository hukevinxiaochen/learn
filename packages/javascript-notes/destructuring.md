# destructuring
#use/javascript

## ES6: Use Destructuring Assignment to Extract Values from Objects
_Destructuring assignment_ is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
Consider the following ES5 code:

```
const user = { name: ‘John Doe’, age: 34 };
const name = user.name; // name = ‘John Doe’
const age = user.age; // age = 34
```

Here’s an equivalent assignment statement using the ES6 destructuring syntax:

```
const user = { name: ‘John Doe’, age: 34 };
const { name, age } = user;
// name = ‘John Doe’, age = 34
```

One can also rename a property using destructuring assignment:

```
const user = { name: ‘John Doe’, age: 34 };
const { name: fullName, age } = user;
// name = ‘John Doe’, age = 34
```

- - - -
_Below needs to be reformatted_
Here, the ## name
 and ## age
 variables will be created and assigned the values of their respective values from the ## user object. You can see how much cleaner this is. You can extract as many or few values from the object as you want.

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
Using the same object from the last example:

const user = { name: ‘John Doe’, age: 34 };

Here’s how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
 userName = ‘John Doe’, userAge = 34

You may read it as “get the value of user.name and assign it to a new variable named userName” and so on.

## ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
The result is similar to ## Array.prototype.slice()
, as shown below:

# const [a, b, …arr] = [1, 2, 3, 4, 5, 7];
# console.log(a, b); // 1, 2
# console.log(arr); // [3, 4, 5, 7]

Variables ## a
 and ## b
 take the first and second values from the array. After that, because of the rest parameter’s presence, ## arr
 gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

Use destructuring assignment with the rest parameter to perform an effective ## Array.prototype.slice()
 so that ## arr
 is a sub-array of the original array ## source
 with the first two elements omitted.

