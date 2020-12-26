# es6 modules
#use/javascript
-> [[nodeJS - modules and exports]]
_Updated 2020-11-22_

## quick reference
* `export {default as mdx} from './create-element'`  -> imports the default export of  `./create-element` and re-exports as a named export called `mdx` — a real world example found at [mdx/index.js at master · mdx-js/mdx · GitHub](https://github.com/mdx-js/mdx/blob/master/packages/react/src/index.js)


**Source** [export - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
## browsers
* In your HTML -> `<script type="module" src="index.mjs"></script>`
* There is no need to use the defer attribute (see  [<script> attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Attributes) ) when loading a module script; modules are deferred automatically.
* Node.js estabilished a way of explicitly setting the module type of files by using a property in the package.json. Setting `“type”: “module”` in a `package.json` does force all files below this package.json to be ECMAScript Modules. Setting `“type”: “commonjs”` will instead force them to be CommonJS Modules.
* [Announcing core Node.js support for ECMAScript modules | by Node.js | Medium](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663)

## webpack
* Ecmascript modules (ESMs) are also supported natively by webpack [Modules | webpack](https://webpack.js.org/concepts/modules/).
	* i.e. and webpack will produce a bundle that browsers will know how to use independently of whether they support ESMs
## Resources
* [Modules | webpack](https://webpack.js.org/concepts/modules/)
* [JavaScript modules - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [How to enable ES Modules in Node.js](https://flaviocopes.com/how-to-enable-es-modules-nodejs/)
