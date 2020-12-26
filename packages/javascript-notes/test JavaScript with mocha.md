# test JavaScript with mocha
#use/javascript
-> [[Study Web Development - Fullstack]]

Related: [[chai assertion library]]
* mocha assumes by default that you have put all your tests in the following directory -> `./test/<name_here>_test.js`
* `npm i -D mocha` and you can just use `npm run test` or `npm run test --silent` as long as you define your test script appropriately in your `package.json` file:
```json
”scripts”: {
  "test": "mocha",
  "test-chai": "mocha -r chai/register-expect",
  "test-es6m": "mocha -r chai/register-expect --experimental-modules"
}
```

* just plain old `mocha` is the default
* if you want to make chai’s expect available then be sure to `npm i -D chai` and pass the `-r`/`--require` flag:
* if you want to enable `import/export` statements implemented by ES6 modules, then add the `--experimental-modules` flag as long as you are running a version of node prior to 13.2.0.

_from the mocha documentation_
> Mocha supports ES modules only from Node.js v12.11.0 and above. To enable this in versions smaller than 13.2.0, you need to add —experimental-modules when running Mocha. From version 13.2.0 of Node.js, you can use ES modules without any flags. (Mocha _will_ load ESM even in Node v10, but this is not officially supported. Use at your own risk.)  

* to use a custom reporter, try the `--reporter` flag, default is `spec` which pipes out the test report onto STDOUT, which just means the test report telling you stuff that passed, failed, and why they failed spills out into your shell.
	* some cools ones are `markdown`, `min`, `json`, see them all at [mocha#reporters](https://mochajs.org/#reporters)
* check out how to use hooks below
```javascript
describe('hooks', function() {
  before(function() {
    // runs once before the first test in this block
  });

  after(function() {
    // runs once after the last test in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```

> Tests can appear before, after, or interspersed with your hooks. Hooks will run in the order they are defined, as appropriate; all before() hooks run (once), then any beforeEach() hooks, tests, any afterEach() hooks, and finally after() hooks (once).  

* [global fixtures](https://mochajs.org/#global-fixtures) are only supported in v9.0.0 and above
* [root hook plugins](https://mochajs.org/#root-hook-plugins) are only supported in v8.0.0 and above

## Resources
### Gentler Introductions
* From 2014, but still the best starting point: [A guide to mocha’s describe(), it() and setup hooks | @samwize](https://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/)
* [Getting Started with Node.js and Mocha - Semaphore Tutorial](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
### Official Documentation
* [getting-started](https://mochajs.org/#getting-started)
* [run-cycle-overview](https://mochajs.org/#run-cycle-overview)
* [nodejs-native-es6m-support-mocha](https://mochajs.org/#nodejs-native-esm-support)
### Tips
* [Can I hide or silence “npm ERR!” output when using npm run script? - Stack Overflow](https://stackoverflow.com/questions/38084112/can-i-hide-or-silence-npm-err-output-when-using-npm-run-script)
* [text-fixture-decision-tree-wizard-thing](https://mochajs.org/#test-fixture-decision-tree-wizard-thing)

[Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/#configuring-mocha-nodejs)
[Mocha + Enzyme with create-react-app | Codementor](https://www.codementor.io/@daveschinkel13/running-mocha-enzyme-with-creat-react-app-84flnngkk)
[Spies - Sinon.JS](https://sinonjs.org/releases/v9.0.3/spies/)
[Full DOM Rendering · Enzyme](https://enzymejs.github.io/enzyme/docs/api/mount.html)
[Unit Testing React-Redux Hooks. Testing functional components that use… | by Angad Singh | Better Programming | Medium](https://medium.com/better-programming/unit-testing-react-redux-hooks-ce7d69e1e834)
[Expect / Should - Chai](https://www.chaijs.com/api/bdd/)