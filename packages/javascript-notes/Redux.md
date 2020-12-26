# Redux
#use/javascript

A popular state management library written in JavaScript suitable for managing front-end state to assist in creating stateful user interfaces for single-page applications.

## How it works
Provides a single object that manages state for an entire application. This is known as the _redux store_. The data in the store is read only. Changes to the data in the store can be made by _dispatching actions_ to a _reducer_.

## API
* createStore(reducer) - creates a Store from a reducer function and any middleware one may choose to use.
* Store
	* dispatch(action) - passes an action to the store’s reducer function.
	* getState() - returns the state object.
	* subscribe(listener) - registers a listener function that runs whenever state changes.
## Usage
* Action creator - a function that returns an action object.
* Action type - a constant value holding a string that represents a type of action that is used by convention as a property of the action object.

## Notes
	* reducer function
		* is run by the store whenever an action is dispatched; a store knows what reducer function to run because it is always created via createStore along with a reducer function as its first argument.
		* takes the state and an action object
			* usually with conditional logic inside to handle the different types of action -> like a switch case statement
		* returns new state
* Redux
	* install
		* `yarn add` or `npm install redux`
	* use with
		* `react-redux`
		* `redux-thunk`
	* devDependency
		* `redux-logger`
	* write a reducer function
		* `(previousState, action) => newState` 
	* create a store [createStore | Redux](https://redux.js.org/api/createstore)
		* `import { createStore } from 'redux'` 
		* `createStore(reducer, [initialState], [enhancer])`
			* takes a reducer function as an argument and returns a store, which gives us methods:
				* dispatch - takes an action object as an argument and sends this to the store (or maybe to the reducer); 
				* getState - returns the state object in the store
				* subscribe - takes a function to be run with each state change
			* [Initializing State | Redux](https://redux.js.org/recipes/structuring-reducers/initializing-state)
		* `applyMiddleware(...middleware)` - allows us to pass in redux middleware like thunkMiddleware and createLogger() and returns a store _enhancer_
	* provide the store to your app
		* Make redux store available to our React components using `react-redux`
		* `import { Provider } from 'react-redux'`
```jsx
import { Provider } from 'react-redux';
import store from './yourStore';

ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
  </Provider>,
  document.getElementById('yourApp')
);
```
	* use state with
		* `store.getState()` -> state object
		* connect API from **react-redux**
			* `mapStateToProps`
		* `useSelector(selectorFn)` hooks from **react-redux**
			* is run whenever the function component renders (unless reference hasn’t changed since a previous render so that a cached result can be returned) -> subscribes to the redux store, and runs the selector when an action is dispatched.
			* selector may return any value as a reseult, not just an object.
	* modify state with
		* `store.dispatch(action)`
			* action object - has key `type` (mandatory) and optional additional data as needed; is passed into a dispatch call and is available to reducer as its second argument after the initial state; is meant to be understood by the reducer function that can then update state according to the action.type that is passed in
		* `useDispatch` hooks from **react-redux**
		* connect API from **react-redux**
			* `mapDispatchToProps`
* How to modularize redux code
	* ACTION TYPES
		* consider the problem of mispelling the action type in a dispatch call and never catching this error because no error gets thrown -> assign the string in a constant of the same spelling instead and pass the constant to dispatch
	* ACTION CREATOR
		* a function that returns an action object
	* `combineReducers`
		* A popular convention is to name reducers after the state slices they manage, so you can use ES6 property shorthand notation: `combineReducers({ counter, todos })`. 

## Resources
[[20200824]]
[[20200825]]
[[Self review and supplemental learning]]
[Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)
