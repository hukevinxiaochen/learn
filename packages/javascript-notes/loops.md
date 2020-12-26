# loops
#use/javascript
[[Study Web Development - Fullstack]]

- [ ] How do you use `for... in...` and `for... of...`
- [ ] How do nested loops work?
- [ ] `Object.hasOwnProperty` what is this for?
- [ ] `Object.keys` what is the return value? How would one use it?

We can use `break` and `continue` in for loops [Control Flow in Javascript - DEV](https://dev.to/mugas/control-flow-in-javascript-246l)

- - - -
* [for - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

`for (initialization; condition; final-expression) statement`

	* Initialization expression gets evaluated before the loop begins. The result of the expression is discarded.
		* Usually a counter variable is declared and assigned a value. If `var` is used, the variable is not local to the loop, i.e. it has the same scope as the for loop itself. Variables declared with `let` are local to the loop statement.
	* Condition is evaluated before each loop iteration. When true, the loop is executed. When false, execution skips to the first expression following the for construct (i.e. it moves on to the rest of the program).
	* Final-expression is evaluated at the end of each loop iteration occurring prior to the next evaluation of the condition.
		* Usually used to update or increment the counter variable.

* [do…while - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
* [for…in - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
`for ... in` loops over the keys in an object; indices in array, string

It will traverse the prototype chain and return all enumerable keys found along the way. If the goal is to loop just over the object keys, then looping over Object.keys(targetObject) might be the best way. (**Source** Fullstack)

```javascript
> let input = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
undefined
> input
[ [ 4, 5, 1, 3 ],
  [ 13, 27, 18, 26 ],
  [ 32, 35, 37, 39 ],
  [ 1000, 1001, 857, 1 ] ]
> for (let a in input) {console.log(a);}
0
1
2
3
```

* [for…of - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
`for ... of` loops over values

- - - -
### while
```javascript
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

### for

### do while
Essentially, a do…while loop ensures that the code inside the loop will run at least once. Let’s try getting a do…while loop to work by pushing values to an array.


### Problem solving

```javascript
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (name === contacts[i]["firstName"] && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (name === contacts[i]["firstName"]) {
            return "No such property";
        }
    }
    return "No such contact";
// Only change code above this line
}

lookUpProfile("Akira", "likes");
```
