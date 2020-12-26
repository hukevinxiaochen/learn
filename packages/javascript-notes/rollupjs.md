# rollup — module bundler

[rollup.js](https://rollupjs.org/guide/en/)

`--file`
* `--format`
	* `iife`
	* `cjs`
	* `umd`

### Tree shaking
* Tree shaking
	* Rollup statically analyzes the code that is being imported, excludes unused code.

Basically compare the following two scenarios (with and without tree shaking):

```javascript
// import the entire utils object with CommonJS
const utils = require( './utils' );
const query = 'Rollup';
// use the ajax method of the utils object
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

```javascript
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
const query = 'Rollup';
// call the ajax function
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```
