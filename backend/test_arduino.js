
const SerialPort = require('serialport');
const keyPressEvent = new Event('keypress');

const { ReadlineParser } = require('@serialport/parser-readline')


const port = new SerialPort.SerialPort({ path: '/dev/tty.usbmodemHIDPC1', baudRate: 9600 })

const parser = new ReadlineParser();
port.pipe(parser);

parser.on('data', (data) => {
    console.log('Data from Arduino:', data);
    if (data > 26){
    // Customize the event properties
        // keyPressEvent.initEvent('keypress', true, true); // You can adjust these parameters as needed
        keyPressEvent.key = 'A'; // The key you want to simulate
        console.log('key A!')

    }

  
    // You can send this data to your web application or perform actions here.
  });
SerialPort.SerialPort.list()
  .then(ports => {
    ports.forEach(port => {
      console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer || 'N/A'}`);
    });
  })
  .catch(error => {
    console.error('Error listing serial ports:', error);
  });


