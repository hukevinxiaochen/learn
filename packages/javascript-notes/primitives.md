# primitives
#study/programming
#use/javascript
[[data types]]
* definition

a single value and is **not** an object

1. string
2. number
3. null
4. undefined
5. boolean
6. symbol (ES2015)

* they are immutable
* how is it possible to call methods on primitives?

Dot notation is only used to access properties and values from an object, so how is it possible to access methods on a Primitive Data Type such as a string?

```javascript
let str = "I am not an object";
let num = 5500;

console.log(`str.toUpperCase() returns ${str.toUpperCase()}`);
console.log(`str.includes('I') returns ${str.includes('I')}`);
console.log(`str.padStart(25, 'Z') returns ${str.padStart(25, 'Z')} `);
console.log(`str.length returns ${str.length}`);

console.log(`num.toString() returns ${num.toString()}`);
console.log(`num.toFixed(2) returns ${num.toFixed(2)}`);
console.log(`num.toLocaleString() returns ${num.toLocaleString()}`);
```

### boxing
When you use dot notation on a string, boolean, number, or symbol to access a method or property, the JavaScript engine coerces the value into a temporary “wrapper object” (this is called “boxing” in other languages) and immediately deletes the “wrapper object” after the operation is completed.

```javascript
let num = 1;
console.log(`Before re-assignment ${num}`);

num = 2;
console.log(`After re-assignment ${num}`);
```

Primitive values cannot be changed, only “copied” or re-assigned.