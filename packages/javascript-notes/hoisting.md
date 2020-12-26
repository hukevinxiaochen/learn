# hoisting
#use/javascript
#references

[[scope or lexical environment]]

This refers to the fact that JavaScript programs are interpreted in a specific way, which involves moving all function and variable declarations to the top of the program before executing.

You can try seeing examples of real code, and their “hoisted representations” to get a sense of what this means.

Hoisting, however, works differently for variables declared with `let` or `const`. Even though these variable definitions are “hoisted”, they enter a “temporal deadzone” in which they are inaccessible until the line of code in which they were created becomes available.

[Temporal Dead Zone (TDZ) demystified - JS Rocks](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified)