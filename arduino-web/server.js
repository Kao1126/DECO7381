const express = require('express');
const SerialPort = require('serialport');
const WebSocket = require('ws');

const app = express();
// Create a port
// Configure the port to match the Arduino port, Current Mac is /dev/cu.usbserial-110, Windows is COM3
const port = new SerialPort.SerialPort({
  path: '/dev/cu.usbserial-110',
  baudRate: 9600,
})
// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

app.use(express.static('public'));

// Connect to the port
wss.on('connection', (ws) => {
  console.log('New client connected');
  port.on('data', (data) => {
    ws.send(data.toString());
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
