const WebSocket = require('ws');

let WebSocketServer = WebSocket.Server;
let port = 3001;
let ws = new WebSocketServer({
    port: port
});

let userList = [];

// connections
ws.on('connection', client => {
    console.log('There has been a connection>>');
    console.log('# of connections :: ' + userList.length);
    let userIndex = userList.length;
    //let clientInfo = `
    //                  IP: ${client.connection.remoteAddress}
    //                 `;
    //client.send('greetings' + clientInfo);
    userList.push(client);
    //console.log(userList);

    //let alias = 'Anonymous';
    client.on('message', message => {
        //alias = message;
        console.log(message);

        // push to other clients ect
        userList.forEach(user => {
            if (user != client) {
                user.send(message);
            }
        });
    });
    client.on('close', () => {
        userList.splice(index, 1);
        console.log('User left room');
    });
});
