# Validating braces
#use/javascript

```javascript
// Takes argument braces, i.e. a string
// and returns True if braces are closed appropriately
// and False otherwise. What does appropriate mean?
// see below:

// Examples:
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
  if (braces.length % 2 != 0) {
    return false;
  }
  
  const opener = RegExp(/[{\[\(]/);
  const closer = RegExp(/[}\]\)]/);
  
  let open = [];
  
  for (i in braces) {
    if (opener.test(braces[i])) {
      open.push(braces[i]);
    } else if (closer.test(braces[i])) {
      let pair = "";
      switch(braces[i]) {
        case "]":
          pair = "[";
          break;
        case ")":
          pair = "(";
          break;
        case "}":
          pair = "{";
          break;
      }
      if (pair === open[open.length - 1]) {
        open.pop();
      }
    }
  }
  
  if (open.length === 0) {
    return true;
  } else {
    return false;
  }
}
```

a similar approach to the above, but much cleaner and better I think:

```javascript
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
```

This works too I guess? Learn to [[regular expressions]]

**Hint** The principle is that to be valid, there MUST occur `()`, `[]`, `{}` at some point. Your stack-based solution tests as much using the pop feature.
```javascript
function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}
```

