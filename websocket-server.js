const WebSocket = require('ws');

let WebSocketServer = WebSocket.Server;
let port = 3001;
let ws = new WebSocketServer({
    port: port
});

ws.on('connection', client => {
    console.log('hey there');
    client.send('greetings');

    let alias = 'Anonymous';
    client.on('message', message => {
        alias = message;
        console.log(message);

        // push to other clients ect
    });
});
