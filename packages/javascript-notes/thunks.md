# thunks
#study/programming

[[20200825]]

A thunk is a subroutine (read function for us simple JS non-CS folks) that makes asynchronous calls, awaits their completion, and then makes other calls and maybe returns something (sometimes referred to as the “thunk value”) that is only available following the completion of the asynchronous stuff.

How a thunk might look in #use/javascript

```javascript
// Meet thunks.
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state.
// This is an action creator that returns a thunk:
function makeASandwichWithSecretSauce(forPerson) {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function(dispatch) {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}
```

In the very specific implementation above, we are writing a thunk in the context of using _redux-thunk_. In this case, the thunk is the function being returned by a ::thunk creator:: called `makeASandwichWithSecretSauce`. The thunk itself takes `dispatch` (and getStore - not shown) as arguments and then waits for the results of an asynchronous call (`fetchSecretSauce`) to resolve before calling dispatch with `makeASandwich` if `fetchSecretSauce` was successful and with `apologize` if there were to be an error thrown at the time of evaluation.

The _redux-thunk_ library allows action creators that return **thunks** rather than objects to be understood. _redux-thunk_ sits as middleware in the usual dispatch call routine to detect actions that are actually thunks, pass it dispatch (and getState) so that once whatever asynchronous work is completed by the thunk, a regular action (i.e. an object) can be dispatched from within the thunk body and then processed in the usual fashion.