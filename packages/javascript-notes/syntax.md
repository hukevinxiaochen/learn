# syntax
#use/javascript

[[Study Web Development - Fullstack]]

## Comments
Use `//` comments rather than `/* */` block comments due to asterisks being seen in regular expressions as well (1).

## Syntax notes
But for now, remember to always include the `(function(){“use strict”;` before your code, and add `})()`; to the end of your code. You will learn what these mean, but for now they can be thought of as doing the following:
1.  Massively improve performance.
2.  Prevent stupid semantics in JavaScript that trip up beginners.
3.  Prevent code snippets executed in the console from interacting with one-another (e.g., having something created in one console execution being used for a different console execution).

## Grammar
### Semicolon use
**source** JavaScript - the Good Parts - JSLint expects that every statement be followed by `;` except for `for`, `function`, `if`, `switch`, `try`, and `while`. JSLint does not expect to see unnecessary semicolons or the empty statement.

### Variable declarations
 [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) Declares a variable, optionally initializing it to a value.
 [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) Declares a block-scoped, local variable, optionally initializing it to a value.
 [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) Declares a block-scoped, read-only named constant.

```javascript
var myVar = 8 + 033;
```
gives `SyntaxError: unknown: Legacy octal literals are not allowed in strict mode (1:22)`

increment with the `++` operator  `i++;`

`--` works as well
`%` is a remainder operator, not exactly  a “modulus” because it fails with negative numbers
`+=` compound assignment with augmented addition

In JavaScript, String values are _immutable_, which means that they cannot be altered once created.

```javascript
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line

```

gives `TypeError: Cannot assign to read only property ‘0’ of string ‘Jello World’`

```javascript
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
```

### escape sequences
`\'` single quote
`\"` double quote
`\\` backslash
`\n` newline
`\r` carriage return
`\t` tab
`\b` word boundary
`\f` form feed