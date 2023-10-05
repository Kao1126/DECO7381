const express = require('express');
const src = require('./src');
const path = require("path");
const app = express();

const SerialPort = require('serialport');
const WebSocket = require('ws');

const http = require('http');

const server = http.createServer(app);
const { ReadlineParser } = require('@serialport/parser-readline')
// const wss = new WebSocket.Server({ server });
const wss = new WebSocket.Server({ port: 3000 });


// SerialPort.SerialPort.list()
//   .then(ports => {
//     ports.forEach(port => {
//       console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer || 'N/A'}`);
//     });
//   })
//   .catch(error => {
//     console.error('Error listing serial ports:', error);
//   });

// const port = new SerialPort.SerialPort({ path: "/dev/tty.usbmodem101", baudRate: 9600 })

// const parser = new ReadlineParser();
// port.pipe(parser);

// wss.on('connection', (ws) => {
//     console.log('WebSocket client connected');
    
//     // Listen for data from the serial port
//     parser.on('data', (data) => {
//         // Send the data to all connected clients
//         ws.send(data.toString());
//     });
//     ws.on('message', (message) => {
//         console.log(`Received message from client: ${message}`);
//     });

//     ws.on('close', () => {
//         console.log('WebSocket client disconnected');
//     });
// });



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend"));
app.use(express.static('../frontend'))

app.get('/index', (req, res) => {
  res.render('index.ejs');
})


app.get('/explore', (req, res) => {
  res.render('explore.ejs');
})

app.get('/data_visual', (req, res) => {
  var temps = src.all_SST;
  var rand = Math.floor(Math.random() * src.times);
  var rand_sal = Math.floor(Math.random() * src.salinity.length)
  var ph_index = rand%2;
  res.render('data_visual.ejs', {temp: temps[rand], ph: src.ph_value[ph_index], salinity: src.salinity[rand_sal], data: src.all_reef});
})

app.get('/interaction', (req, res) => {
  
  res.render('interaction.ejs', {all_reef: src.all_reef, reef_bleaching: src.reef_bleaching, reef_bleaching_data: src.reef_bleaching_data});
})

app.get('/map', (req, res) => {
  res.render('map.ejs', {all_reef: src.all_reef, reef_bleaching: src.reef_bleaching, reef_bleaching_data: src.reef_bleaching_data});
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
  });
  
  