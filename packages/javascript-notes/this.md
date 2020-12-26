# this
#use/javascript

-> [[Study Web Development - Fullstack]]
Related topics: [[scope or lexical environment]] and [[hoisting]] and [[closure]]

## Quick Reference
* **arrow function** if arrow function -> look in the lexical environment for `this`
* **bound and indirectly called** if bound by call, apply, or bind -> look at `aFunctionUsingThis.call(thisArg, other arguments for the function);`
* **constructor/new** `new aFunctionUsingThis()` -> `this` is the newly constructed object
* **object method**`anObject.aMethodCalledOnAnObjectUsingThis();` -> `this` is anObject
* **event listener** `elements[i].addEventListener('click', functionUsingThis)` -> `this` is the element upon which the listener is placed.
* **class** -> inside the constructor function`this` is the object being constructed, non-static methods are added to its prototype
* **function** -> the global object OR undefined (in strict mode)
* **global** -> the global object

## Background
In JavaScript, we speak of `this` as a property belonging to **traditional functions** (as opposed to arrow functions) and is determined by call-site and execution context. For the purposes of this discussion - the words _call_ and _invoke_ are synonymous.

_Call-site_ - the location of the function call on the call stack relative to the rest of the program.

_Execution context_ - synonymous with _scope_, the execution context is an environment that our code executes inside of. It is provided by the JavaScript engine, and keeps track of the global object, `this`, variable values, parent execution contexts (i.e. the scope chain), etc. It is important to understand at least 2 types of execution contexts in JavaScript: these are **global** and **function**.

By default, our code initially runs in a global execution context.

Upon invocation of a function, the code that is defined within a function body executes inside of a newly created **function execution context**.

The newly created function execution context keeps track of the “parent” context in which it was created and makes sure that our function body has access to all the variables in the parent context; and thus is born the notion of a scope chain.

With all that out of the way, we can now determine `this` .

### Important nuances
As mentioned above, a function’s `this` depends on execution context. However, there are few other important rules to remember here:

`this` CANNOT be set by assignment during execution - it is determined at time of function invocation once we enter into the function execution context of a particular invocation there is no going back. It can be set before execution though, e.g. using the `bind` method introduced by ES5.

 `Function.prototype.bind` introduced by ES5, returns a function identical to the function upon which it was called with the special feature: ::a set value:: of `this`  that always refers to the same thing no matter the context in which the function may be invoked.

**Arrow functions**, which were introduced by ES2015, (defined with `() => {}`), when invoked, enter into an execution context without a binding to `this`.  As a result - `this`, weirdly enough, takes on whatever value it had _at the point of definition of the arrow function_, i.e. its **lexical environment**, which is simply a natural consequence of closures. 

Don’t remember what closures are? No worries, a closure is simply the combination of a **function definition** with references to some things available in the execution context where the definition is located. MDN calls this the function definition’s “surrounding state” or _lexical environment_. What is important to understand is that a closure is created every time a function is defined **at definition time**.

The reason the arrow function will still have a reference to `this` despite lacking its own binding is because at time of invocation, the arrow function execution context DOES come with a reference to the closure that was created at the time the arrow function was defined and that lexical environment DOES come with a reference to a value for `this`.

## Case Examples
Below, you’ll see described a series of rules that each describe how **this** would be assigned in a variety of execution contexts.

### arrow function
```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

### indirect invocation or call, apply, bind, i.e. explicit binding rule
**this** is whatever you say it is in the arguments passed to call, apply, or bind methods.

Looks like `aFunctionUsingThis.call(thisArg, other arguments for the function);`

### constructor context | new binding rule
When a function is used as a constructor (with the  [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)  keyword), its `this` is bound to the new object being constructed.

Looks like `new ConstructorFunction();`and in this case an object is returned. **this** is bound to that object, i.e. that instance of ConstructorFunction. The behavior is part of how the `new` keyword works.

See [[constructors]]

```javascript
/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```


### object method context | implicit binding rule
When a function is called as a method of an object, its this is set to the object the method is called on.

```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

Long explanation:

the term **method** in JavaScript means a function that is a property of an object. When methods are used, they are called _on an object_ and so any occurrences of **this** in the execution context of a method being called on an object, i.e.

`anObject.aMethodCalledOnAnObject();`

will obey the implicit binding rule, which dictates that **this** refers to object upon which the method is called, in this case: `anObject`.

### event handler execution context
When a function is used as an event handler, its `this` is set to the element on which the listener is placed (some browsers do not follow `this` convention for listeners added dynamically with methods other than  [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) ).
```javascript
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

### class context
A special case of function context.

* Within a `constructor(){}` function within a class, `this` is an object.
* All non-static methods within the class are added to the prototype of `this`.

```javascript
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```

* In a derived class, `this` has no initial binding.
```javascript
class Base {}
class Bad extends Base {
  // because returns before calling super()
  constructor() {}
}
class Good extends Base {} // because has no constructor
class AlsoGood extends Base {
  constructor() {
    return {a: 5}; // because returns an object
  }
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError
```

Bad, Good, and AlsoGood are derived classes and they have no initial `this` binding. Referring to `this` before calling `super()` in the constructor will throw an error.

### function context
i.e. inside of a function
 `this` -> depends on how the function is called AND strict mode

* **NOT** strict mode _AND_ the value of `this` is NOT set by the function call -> `this` defaults to ::the global object::
```javascript
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true
```

* strict mode _AND_ the value of `this` is NOT set by the function call -> `this` defaults to `undefined`

### global context | default value rule
i.e. outside of any function
`this` -> the global object

```javascript
// In web browsers, the window object is also the global object:

console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

When found outside of a function, and just in the global execution context, **this** references the global object by default. Learn more about different kinds of global objects in the notes on [[built-in objects]].

This applies to functions called in the global context as well, e.g.

`aFunctionCalledInGlobalContext();`

## Reference
* [this - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [Arrow function expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* Fullstack Foundations