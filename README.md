# WebSocket-js

## Chat Application
The main demonstration for WebSockets in this repository will be a chat
application.

## WebSocket Uses
WebSockets are useful for sending small amounts of data both from the
client to the server and vice versa.
* Chat applications
* Game uses


## Requirements
* ws module
  * npm install --save ws

## Utillity for testing
* wscat utillity
  * npm install -g wscat

## Execution
First we need to serve the static files somehow, SimpleHTTPServer provided
with python is an easy way to do this.
```console
foo@bar:~$ python -m SimpleHTTPServer 3000
foo@bar:~$ node websocket-server.js
```
After serving the static files and starting up the node server, we can use
wscat for trying out the basic functionality.

```console
foo@bar:~$ wscat -c localhost:3001
```

