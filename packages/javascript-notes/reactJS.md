# reactJS
#use/javascript

-> [[Study Web Development - Fullstack]]

* Props
	* PropTypes
		* [Typechecking With PropTypes – React](https://reactjs.org/docs/typechecking-with-proptypes.html)
		* [Validating Props easily with React PropTypes | by Andreas Reiterer | codeburst](https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207)
* [State and Lifecycle – React](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
	* [React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
	* Syntax -> `this.setState({ key: newStateValue })`
	* Semantics -> please replace the current object referenced by `this.state` with a new one that has the key we specify with the value represented by `newStateValue`.
* [Event handling](https://reactjs.org/docs/handling-events.html)
	* Syntax -> `<Component onClick={eventHandler} />`
		* Note that no explicit function invocation is necessary, just the event handler name. It is quite common to see the eventHandler defined in the body of a class expression that defines a `React.Component`.
	* Semantics -> similar to saying `addEventListener('click', eventHandlerFunction(event) {})`
	* To pass an argument to an event handler
		* [Handling Events – React](https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers)
```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
* JSX
	* First, it is extremely valuable to read the entire main concepts section (12 chapters) all the way through in 1 sitting as it really helps solidify some of the stuff you have seen and learnt while using React [Hello World – React](https://reactjs.org/docs/hello-world.html)
	* [Introducing JSX – React](https://reactjs.org/docs/introducing-jsx.html) and [JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html)
	* The key thing to remember is this:
```jsx
<MyButton color=“blue” shadowSize={2}>
  Click Me
</MyButton>
```
compiles into:
```javascript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```
		* which also explains why (i.e. JSX expressions are evaluated at compilation time on first render) - when you are passing more than just the event argument to an event handler, you need to do one of the following:
```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
* Dependencies
	* If you plan to use ES6 language features like modules (i.e. being able to write your JavaScript in separate files but served in a single script tag) and JSX to write your React components (as is typically demonstrated in tutorials) - you’ll want to a way to bundle your code and then compile it to ES5 it before sending it to a browser for use. Parcel and Webpack are two mutually exclusive options. Try some of the below resources on for size:
		* [Parcel](https://parceljs.org/getting_started.html)
			* [Creating a React app toolchain from scratch - LogRocket Blog](https://blog.logrocket.com/creating-a-react-app-toolchain-from-scratch/)
		* [Getting Started | webpack](https://webpack.js.org/guides/getting-started/)
* Hooks
	* `const [state, setState] = useState(initialState)`
		* state holds some value
		* setState is a function that can update state
	* `useEffect(func,/[deps]/)` -> run func, i.e. make an effect after every render (either componentDidMount or componentDidUpdate)
		* each time it runs, a _new_ func is run
		* if `func` returns a `cleanupFunc` then cleanupFunc is run before every re-render and at componentWillUnmount
		* `[deps]` -> contains list of props and state variables to which one wants the effect to respond, i.e. hence should run in response to changes only in those variables; may be empty - which generally means that the effect should be immune.
	* `const value = useContext(ContextObject)`
		* returns context value for the given ContextObject <- value prop of the nearest ContextObject.Provider above the calling componen in the tree
	* `const memoizedCallback = useCallback((a,b) => {a + b}, [a, b])`
	* `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
	* `useCustomHook(...argsYouWant)` -> returns whatever you want as well
		* provides a function you can call from within the body of the function component that may contain calls to useEffect and useState
		* great use case is when you want to share some logic between components
	* Resources
		* [Hooks API Reference – React](https://reactjs.org/docs/hooks-reference.html)
		* [Rules of Hooks – React](https://reactjs.org/docs/hooks-rules.html)
		* [Building Your Own Hooks – React](https://reactjs.org/docs/hooks-custom.html)
