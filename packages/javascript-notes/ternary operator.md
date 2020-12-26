# ternary operator
#use/javascript

**WARNING** cannot put a “return” statement in any of the expressions here. It just won’t work.

one line if-else

```javascript
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
```

This checks if a is equal to be and returns string “Equal” when true, else “Not Equal”

These can be chained together to test multiple conditions

```javascript
function checkSign(num) {
  return num > 0 ? "positive"
    : num === 0 ? "zero"
    : "negative"
}

checkSign(10);
```

