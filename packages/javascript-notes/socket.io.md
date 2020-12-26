# socket.io
#use/javascript

[[Task Bank]]

[Introduction | Socket.IO](https://socket.io/docs/) - library that allows real-time, event-based, bi-directional communication between browser and server.

It consists of a node.js server and a Javascript client library. Client libraries are available for Python, Dart, Swift, etc.

Behind the scenes, it tries to establish a WebSocket connection with a fallback to HTTP long polling.

## Server setup
### Using Express
```javascript
const express = require('express')    // function
const socketio = require('socket.io') // function

const app = express() // register routes on app
const server = app.listen(3000) // returns an http server

const io = socketio(server) // expects an http server

/**
 * Define event listeners on the io object.
*/
```

## Client setup

## Resources
[javascript - In node.js do I need http when building a socket.io/express app? - Stack Overflow](https://stackoverflow.com/questions/37114987/in-node-js-do-i-need-http-when-building-a-socket-io-express-app)
[export - Web technology for developers | MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
[socket.io/index.ts at master · socketio/socket.io · GitHub](https://github.com/socketio/socket.io/blob/master/lib/index.ts)
[Initialization | Socket.IO](https://socket.io/docs/server-initialization/)