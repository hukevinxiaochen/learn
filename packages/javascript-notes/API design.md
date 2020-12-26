# API design
#use/javascript

## Design Routes
**Source** [REST API Architectural Constraints - GeeksforGeeks](https://www.geeksforgeeks.org/rest-api-architectural-constraints/)
* REST Architecture
	* Uniform interface
		* ::Resource::-based
			* Identified by request URI `/resources`, `/resource/:id`
		* Manipulate resources through representations thereof
			* e.g. Clients receive a representation of resources, and can use the resource ID contained therein to further request modification or deletion of resources.
		* Self-descriptive messages
			* Each message contains enough information for either the client or server to know exactly what to do with the information.
				* e.g. the ‘HTTP GET /resources’ message can be easily interpreted as a request to _serve a collection_ of resources which can be distinguished from the ‘POST /resources’ message which is interpreted as a request to _create a resource_.
		* Hypermedia as the Engine of Application State (HATEOAS)
			* Should include links for each response so that client can discover other linked resources easily.
	* Stateless
	* Decides about which resources are cacheable, which are not
	* Client-Server architecture to separate concerns of requesting data and concerns of data storage
	* Layered system - the application should be composed of multiple layers that function independently of one another and interface with each other with the same uniform interface as discussed above
	* Code on demand

### HTTP
Each ::resource:: gets their own URI

## Write Tests
Test to ensure that ->
* routes exist
* send appropriate status codes
* resources served are of the correct structure and contents

## Implement Routes
### Express
**Source** [[20200918]] Boilermaker workshop
`app.use(‘/api’, require(‘./apiRoutes’));`
->
```javascript
const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

module.exports = router;
```
-> -> 
```javascript
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

module.exports = router;
```