const WebSocket2 = require('ws');
const wss = new WebSocket2.Server({ port: 8086 });

wss.on('connection', function connection(ws) {
  ws.send('dobar dan radi ')
  
  // Osluškivanje događaja message
  ws.on('message', function incoming(message) {
    console.log('dolazeca poruka', message);
    
    // Provera da li je poruka "help"
      if (message == 'help') {
          // Slanje odgovora ako je poruka "help"
          ws.send('kako mogu pomoci?');
      }
      else { 
          ws.send('nisi poslao pravu poruku');
      }
  });
});
