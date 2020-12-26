# scope or lexical environment
#use/javascript

[[this]]

**Source** Freecodecamp
In JavaScript, _scope_ refers to the visibility of variables. Variables which are defined outside of a function block have _Global_ scope. This means, they can be seen everywhere in your JavaScript code.

variables assigned within functions BUT **without** using `var` keyword are actually also have _Global_ scope

without using `var` keyword 

It is possible to have both _local_ and _global_ variables with the same name. When you do this, the local variable takes precedence over the global variable.
In this example:
```javascript
var someVar = “Hat”;
function myFun() {
  var someVar = “Head”;
  return someVar;
}
```

**Source** Fullstack Foundations Part 2
## Lexical environment is the technical term for scope
Every scope has a lexical environment with two components:
* environment records, i.e. the local scope
	* store the identifier bindings, i.e. assign values to variables
	* types described in the ECMAScript spec are object (where globals are stored) and declarative environmental records (where variables with block scope are stored)
* a link to an outer lexical environment if nested within another environment, i.e. the scope chain

## Scope
Scope determines the accessibility of identifiers (e.g., variables) and values in a **specific section of source code during runtime** (it determines what your program has access to). Identifier (e.g., variable) name resolution depends on the **location in the source code** where the named variable or function (the identifiers) is defined.

Scope answers the question “who has access to what?”

### Global
Every variable, function, etc defined in the Global Scope is accessible by anything in your program.
### Function
Anything defined in a function definition block (between the braces), and is actually only accessible within the function definition block, nowhere else in the program would it be accessible.
### Block (introduced in ES2015)
Created when a variable is declared with `let` or `const` within a block statement.

e.g.
```javascript
// deer and bear are accessible only within the block (i.e. braces)
// tiger is in global scope and accessible anywhere else in the program
{
  const deer = "Bambi";
  let bear = "Ursa";
  var tiger = "Raja";
}
```

