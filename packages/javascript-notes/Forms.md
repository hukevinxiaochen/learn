# Forms
#use/html
#use/javascript

## Client
**Sources** [Sending form data - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data), [Creating Sandboxed HTTP Connections - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Creating_sandboxed_HTTP_connections)
* Provide a `<form></form>` element with
	* Behaviors
		* Default behavior -> when a form is submitted, a new HTTP request with a full page reload planned to handle the response is sent to the url specified by _action_, using _method_. For method **GET**, query parameters are appended to the URL  `/?name=value&name0=value0...` where name and value correspond to their respective attributes on the _input_ elements contained in the form. For **POST**, the _name_ attributes of _inputs_ are used as keys and _value_ used as values similar to the **GET** behavior, but the data is stored in the URL request body rather than appended to the URL itself. The data is said to be ::url encoded:: format, and this can be seen from the `Content-Type` header of the HTTP request which should be `application/x-www-form-urlencoded`.
		* Other behaviors -> as opposed to a traditional HTTP request with full page reload, AJAX requests using the XMLHTTPRequest or Fetch API or JavaScript libraries that wrap around these allow us to accomplish data exchange via HTTP methods **without** a full page reload. Requests and responses are handled by our client-side JavaScript code and used to manipulate the DOM as needed.
		* React controlled behavior enables any of the above patterns and more in an idiomatic approach specific to a React application.
	* Attributes (all optional)
		* `action=` relative URL (`/api/chickens`) to request upon “submission”
		* `method=` HTTP verb to use in “submission” request, typically `"post"` to actually send data
		* `onSubmit={handleSubmit}` for React controlled component pattern
		* `target=` `_self` is default, `_blank`, `_parent` to specify the _browsing context_ in which to display the response
	* Children
		* `<label>A label that can be read by screen readers</label>`  with attributes
			* `for=` should correspond to the `id` of an input element to ensure that each input gets a corresponding label
		* `<input />` fields with attributes
			* ❗`type=` default is _text_, others are _button_, _color_, _checkbox_, and _date_ just to name a few: [<input> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
			* ❗`name="some name"`
			* ❗`id="unique"` needs to be unique and will be used by a _label_ tag to associate itself.
			* ❗`value=<depends on input type>`
			* `onChange={handleChange}` for React controlled components
		* at least one `<button type="submit">Submit</button>` that will trigger the **submit event** upon being clicked
			* type could also be `reset` to clear the form inputs or `button` which has no default behavior - it allows our JavaScript to decide what to do with the button.

### JavaScript
* Generally dealing with form elements using JavaScript involves needing to get all the inputs, their names, and values into an object you can pass around, post, etc. So for this, the HTMLFormElement API is SUPER useful.
[HTMLFormElement.elements - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)

### React controlled component pattern
* Component that renders form elements and inputs manages the values of those inputs in local state and binds a change handler instance method that updates state with change events (when the value of the input changes), and the value attribute on the form is set to a slice of local component state so that it always reflects what is seen by state.
	* Furthermore, the submission event is also handled by a custom instance method (usually needs to be bound if it will modify state).
	* handleSubmit function should call `event.preventDefault()` to prevent the usual default behavior and allow the function to handle the submission.

### Redux state management pattern
* If the form submission is meant to result in new data being incorporated into the application state, which should then result in some components re-rendering (usually the case), then the component needs to additionally communicate with the redux store and dispatch an appropriate action and firing of asynchronous actions through some custom middleware like redux-thunk or redux-promise.
* Steps might include
	* `import { connect } from 'react-redux'` or use any number of other ways of communicating with the redux store available through the rich `redux` and `react-redux` ecosystem.
	* New action type
	* New thunk creator

### React uncontrolled component pattern

## Server
### Express
Parses the request body and will associate