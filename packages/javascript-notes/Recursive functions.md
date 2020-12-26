# Recursive functions
What is recursion and when would it be useful? [Reading 10: Recursion](https://web.mit.edu/6.005/www/fa15/classes/10-recursion/#when_to_use_recursion_rather_than_iteration)

[Tail-Call Optimization in the Wild | by Celena Toon | IndigoAg.Eng | Medium](https://medium.com/indigoag-eng/tail-call-optimization-in-the-wild-26a10e450c73)
[Tail call optimization in ECMAScript 6](https://2ality.com/2015/06/tail-call-optimization.html)
ECMAScript 6 https://kangax.github.io/compat-table/es6/#test-proper_tail_calls_(tail_call_optimisation)

#use/python
## Examples
### Madhava-Leibniz series
for estimating the value of pi
```python
from math import pi

def iter_pi(epsilon, i=1, leibniz_madhava=0):
    if i % 2 == 1:
        # print("adding 1/{}".format(2*i - 1))
        leibniz_madhava += 1/(2*i - 1)
    else:
        # print("subtract 1/{}".format(2*i - 1))
        leibniz_madhava -= 1/(2*i - 1)
        
    pi_est = round(4 * leibniz_madhava,10)

    # BASE case
    if abs(pi_est - pi) < epsilon:
        # print("yay we can stop")
        return [i, pi_est]
    else:
        # RECURSIVE case
        # print("iterating {}".format(i))
        return iter_pi(epsilon, i+1, leibniz_madhava)
```

if run with `iter_pi(0.001)` will return with `RecursionError: maximum recursion depth exceeded in comparison`

[What is the maximum recursion depth in Python, and how to increase it? - Stack Overflow](https://stackoverflow.com/questions/3323001/what-is-the-maximum-recursion-depth-in-python-and-how-to-increase-it)

#use/javascript
### sum
sum the first n elements of an array
```javascript
function sum(arr, n) {
  if (n<=0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
}

sum([5,4,3],3); // 12
sum([5,4,3],2); // 9
sum([5,4,3],1); // 5
```

### countdown array
returns an array with all integers from 1 to n in reverse order
```javascript
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    var cd = countdown(n - 1);
    cd.unshift(n);
    return cd;
  }
}

countdown(5); // [ 5, 4, 3, 2, 1 ]
```

```javascript
// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    var rg = rangeOfNumbers(startNum + 1, endNum);
    rg.unshift(startNum);
    return rg;
  }
};
```

```javascript
function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
  let numF = num * factorialize(num - 1);
  return numF;
}

factorialize(5); // 120
```
