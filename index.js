import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8089 });

wss.on('connection', function connection(ws) {
    ws.send('Привет, Купи слона!');

    ws.on('message', function incoming(message) {
        ws.send('Все говорят "' + message +'", а ты возьми и купи слона');
    });
});
