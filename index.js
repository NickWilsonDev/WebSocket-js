console.log("Make me do things!");

let ws;

let receiveMsg = function (message) {
    let node = document.createElement('li');
    node.textContent = message.data;
    node.classList.add('chat-messages');
    document.body.querySelector('.chat-message-list').appendChild(node);
    console.log(message);
};

let sendMsg = function() {
    let message = document.body.querySelector('.form-control').value;
    console.log(message);
    ws.send(message);
    document.body.querySelector('.form-control').value = '';
};

let initiateConnection = function() {
    ws = new WebSocket('ws://localhost:3001');
    ws.addEventListener('message', receiveMsg);

};

document.addEventListener('DOMContentLoaded', function() {
    initiateConnection();
    document.body.querySelector('#send-message-btn')
                    .addEventListener('click', sendMsg);
}, false);


