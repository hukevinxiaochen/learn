# constructors
#use/javascript

[[Study Web Development - Fullstack]]
- [ ] 	how does the `new` operator work?

[[prototypes]]

* Constructor function -> any function invoked with `new` operator; by convention the following design patterns are used:
	* capitalized function names are used to signal the intent to use a function as a constructor function
	* the function does not explicitly return an object because it is meant to be used with the new keyword for that purpose
	* properties and methods are assigned to `this`, which is understood to be a _new_ object created by the use of the function together with the `new` keyword

* `new <MyFunc>` operator -> what it does:
	* creates a new object
	* assign the `this` value to point to the newly created object
	* constructor function (`MyFunc` is executed)
	* returns this object
	* sets the internal prototype `[[Prototype]]` of the new object to the `.prototype` object associated with the constructor `MyFunc` see [[prototypes]] for details
e.g. `var our_new_object = new MyFunc`

The new object created through the invocation of a constructor function is referred to as an _instance_ of `MyFunc` and indeed the statement: `our_new_object instanceof MyFunc // true`

## Examples
**source** FreeCodeCamp
```javascript
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```

Notice that the `new` operator is used when calling a constructor. This tells JavaScript to create a new instance of `Bird` called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor.

```javascript
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Jimbo", "grey");
```

Notice that one can more easily create different Bird objects, you can design your Bird constructor to accept parameters.

```javascript
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

Anytime a constructor function creates a new object, that object is said to be an _instance_ of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.

## own properties
```javascript
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` and `numLegs` are called **own** properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array `ownProps`:

```javascript
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

## prototype properties
Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among ALL instances of Bird. Here’s how to add numLegs to the Bird prototype

```javascript
Bird.prototype.numLegs = 2;
```

It is possible to iterate through all the properties of an object and sort them into prototype and own properties:

### assigning multiple prototype properties at a time
One can define multiple properties on a constructor’s prototype by assigning an object!
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, // define constructor property always
  numLegs: 4,
  eat: function() {
    console.log(“scrush chew yum”);
  },
  describe: function() {
    console.log(“My name is “ + this.name);
  }
};
```

**warning** doing this erases the constructor property that all prototypes come with by default. Don’t worry, `instanceof` still works.

Still, it is a good idea to remember to define the constructor property (see above)

## constructor property
There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges.

```javascript
var c = new Array;
var x = c.constructor === Array ? true : false;
```

**Note**
Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

[Javascript infinite prototype chain - Stack Overflow](https://stackoverflow.com/questions/4740849/javascript-infinite-prototype-chain)

## class syntax
[use of super](http://discuss.fullstackacademy.com/t/difference-between-arguments-for-super-and-constructor-in-the-class-extends/4400)

