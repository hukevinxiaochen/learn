# class syntax
#use/javascript

-> [[Study Web Development - Fullstack]]

* Declaration
`class Tiger {}`
	* `typeof Tiger` -> ::function::
	* **BUT** `Tiger();` -> _Uncaught TypeError: Class constructor Tiger cannot be invoked without ‘new’_

* Class level function definition

```javascript
class Tiger {
  static cF() {
    // class method
    return this;
  }

  pF() {
    // instance method
    return "this is a prototype function";
  }
}
```

Instance properties must be defined inside of class methods

	* `Tiger.hasOwnProperty('cF')` -> ::true::
	* Weirdly, `Object.entries(Tiger)` -> ::`[]`:: — an empty array!
	* `Tiger.cF();` -> is you guessed it ::[class Tiger]:: see [[this]] and the **implicit binding rule** that applies in this invocation


**Example code**syntax ✱ TestFirst 08
