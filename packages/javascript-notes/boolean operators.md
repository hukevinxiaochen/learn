# boolean operators
## idioms
An idiom in both #use/ruby and #use/javascript or #use/nodeJS is the `!!` which is simply the logical NOT (see below) chained.

See explanation from [Stack Overflow - the double bang](https://stackoverflow.com/questions/3994033/ruby-operator-a-k-a-the-double-bang)
`!!` is just `!` (the boolean negation operator) written twice. It will negate the argument, then negate the negation. It’s useful because you can use it to get a boolean from any value. The first ! will convert the argument to a boolean, e.g. true if it’s nil or false, and false otherwise. The second will negate that again so that you get the boolean value of the argument, false for nil or false, true for just about everything else.

## basics
The below pulls from [Logical operators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) #use/javascript
* Logical AND (&&) in example _expr1_ && _expr2_ -> If expr**1** can be converted to true, returns expr**2**; else, returns expr**1**.
* Logical OR (||) in example _expr1_ || _expr2_ -> If expr**1** can be converted to true, returns expr**1**; else, returns expr**2**.
* Logical NOT (!) in example !_expr_ -> Returns false if its single operand can be converted to true; otherwise, returns true.

**example** [GitHub - hukevinxiaochen/json2html: Json2html is a lightning fast client side javascript HTML templating library with wrappers for both jQuery and Node.js.](https://github.com/hukevinxiaochen/json2html.git)

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

Sometimes you will need to test more than one thing at a time. The _logical and_ operator (&&) returns true if and only if the _operands_ to the left and right of it are true.

The _logical or_ operator (||) returns true if either of the _operands_ is true. Otherwise, it returns false.

case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

```javascript
switch(lowercaseLetter) {
  case “a”:
    console.log(“A”);
    break;
  case “b”:
    console.log(“B”);
    break;
}
```

you can use a `default` case statement to catch everything else

```javascript
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

one can also string cases together without break statements to respond the same way to multiple different things

```javascript
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

You can implement math

```javascript
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

You can implement card counting

```javascript
var count = 0;

// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Output
// -3 Hold
// 5 Bet

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```
