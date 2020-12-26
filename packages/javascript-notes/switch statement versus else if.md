# switch statement versus else if
#use/javascript

It gives a more descriptive way to compare a value with multiple variants. **Source** Javascript.info

> Switch statements are cleaner syntax over a complex or stacked series of if else statements.  

### Use switch instead of if when:
* You are comparing multiple possible conditions of an expression and the expression itself is non-trivial.
* You have multiple values that may require the same code.
* You have some values that will require essentially all of another value’s execution, plus only a few statements.
### Use if instead of switch when:
* You want to test for the truthiness of an expression.
* You only have a single affirmative test.
* You need to evaluate different expressions for each branch

**Source**
[The JavaScript Switch Statement 👨‍💻🔃 (With Examples)](https://love2dev.com/blog/javascript-switch-statement/) by Chris Love