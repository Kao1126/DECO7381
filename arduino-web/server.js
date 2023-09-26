const express = require("express");
const SerialPort = require("serialport");
const WebSocket = require("ws");
const Readline = require("@serialport/parser-readline").Readline;

const app = express();
// Create a port
// Configure the port to match the Arduino port, Current Mac is /dev/cu.usbserial-110, Windows is COM3
const port = new SerialPort.SerialPort({
  path: "/dev/cu.usbserial-110",
  baudRate: 9600,
});
const parser = port.pipe(new Readline({ delimiter: "\n" }));
// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8081 });

app.use(express.static("public"));

// Connect to the port
// wss.on('connection', (ws) => {
//   console.log('New client connected');
//   port.on('data', (data) => {
//     ws.send(data.toString());
//   });
// });

wss.on("connection", (ws) => {
  console.log("Client connected");

  parser.on("data", (data) => {
    console.log("Received data:", data);
    if (data.trim() === "TEMP_CHANGE") {
      ws.send("triggerKeyEvent"); // 当收到TEMP_CHANGE时，向Web客户端发送消息
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
