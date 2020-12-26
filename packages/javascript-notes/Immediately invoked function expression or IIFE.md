# Immediately invoked function expression or IIFE
#use/javascript

```javascript
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses `()` at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an _immediately invoked function expression_ or _IIFE_.

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or _module_. For example, an earlier challenge defined two mixins:

```javascript
let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
```