# public and private properties of objects
#use/javascript

In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird’s definition.

bird.name = “Duffy”;

Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

**Example** fullName is a private property - i.e. belonging to the constructor rather than being accessible as an object key on the instance named “bob”
```javascript
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
        return fullName.split(' ')[0];
      };
  this.getLastName = function() {
        return fullName.split(' ')[1];
      };
  this.getFullName = function() {
        return fullName;
      };
  this.setFirstName = function(first) {
        fullName = fullName.replace(/^\w+/, first);
      };
  this.setLastName = function(last) {
        fullName = fullName.replace(/\w+$/, last);
      };
  this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
      };
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
```
This is a nifty usage of the [[closure]] feature of the JavaScript language.