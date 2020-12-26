# Promises and async-await
#use/javascript

## Background
[Asynchronous Programming :: Eloquent JavaScript](https://eloquentjavascript.net/11_async.html)
[Graceful asynchronous programming with Promises - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

## Using Promises
A `Promise` is an object that represents the eventual completion or failure to complete an asynchronous operation AND is something to which you can attach callbacks.

Modern asynchronous functions return promises. So `modernAsyncFunc('get','google.com')` should return a `Promise`.

And we can attach callbacks: `modernAsyncFunc('get','google.com').then(rejoiceInSuccessCallback, wallowInFailureCallback)`

The callbacks have access to any return value of the asynchronous operation that the promise represents.

## Guarantees - I promise you…
* Callbacks attached to a `Promise` will never be called prior to the completion of the run of the full JavaScript event loop to which they might belong.
* Callbacks added with `.then()` will be called after the success or failure of the asynchronous operation.
* Multiple callbacks can be added by calling `.then()` multiple times; each is executed one after the other in the order they are added.

## Chaining
```javascript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log(‘Got the final result: ‘ + finalResult);
})
.catch(failureCallback);
```

The arguments to then are optional, and `catch(failureCallback)` is short for `then(null, failureCallback)`.

## Async await
```javascript
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

## Rejection events
rejectionhandled - sent after that rejection has been handled by the executor’s reject function
unhandledrejection - sent when a promise is rejected but no reject handler is available

## Create a Promise from an old-fashioned async function
Take `setTimeout(() => saySomething(“10 seconds passed”), 10*1000);` for example.

We can wrap it in a promise like `const wait = ms => new Promise(resolve => setTimeout(resolve, ms));` and use it like a promise thereafter:

```
wait(10*1000).then(() => saySomething(“10 seconds”)).catch(failureCallback);
```

### resolve method and reject method
[Promise.resolve()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)  and  [Promise.reject()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)  are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

### all method and race method
[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)  and  [Promise.race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)  are two composition tools for running asynchronous operations in parallel.

## Creating Promises from Scratch using Traditional Functions
```
function printName(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      console.log('This Promise will resolve soon')
      resolve(name)
    } else {
      reject(Error('no name provided'))
    }
  })
}
```

## Creating Promises from Scratch using Async
Promises are either pending, fulfilled, or rejected

`async (name) => { try { console.log(name); return name; } catch (err) { console.log('no name provided') } }`

An async function is marked by the word async before the function keyword. Methods can also be made async by writing async before their name. When such a function or method is called, it returns a promise. As soon as the body returns something, that promise is resolved. If it throws an exception, the promise is rejected.

`Promise()` constructor for wrapping asynchronous functions that do not already support promises.

## Static Methods for Promise
 [Promise.all(iterable)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Wait for all promises to be resolved, or for any to be rejected.
If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises, in the same order as defined in the iterable of multiple promises.
If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected.
 [Promise.allSettled(iterable)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) Wait until all promises have settled (each may resolve or reject).
Returns a Promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
 [Promise.any(iterable)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise.
 [Promise.race(iterable)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) Wait until any of the promises is resolved or rejected.
If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.
If it rejects, it is rejected with the reason from the first promise that was rejected.
 [Promise.reject(reason)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) Returns a new Promise object that is rejected with the given reason.
 [Promise.resolve(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) Returns a new Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will “follow” that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.
Generally, if you don’t know if a value is a promise or not,  [Promise.resolve(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)  it instead and work with the return value as a promise.

## Applications
[Create a Basic Loader with JavaScript Promises](https://davidwalsh.name/javascript-loader)
[Patterns for a Promises based initialization](https://jeremenichelli.io/2016/04/patterns-for-a-promise-based-initialization/)
