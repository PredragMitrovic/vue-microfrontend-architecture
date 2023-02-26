const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8085 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

    ws.send('Hello, client! rerer');
    setInterval(function() {
        const randomMessage = Math.random().toString(36).substring(2);
        ws.send(randomMessage);
    }, 5000);
});

