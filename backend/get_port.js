
const SerialPort = require('serialport');


SerialPort.SerialPort.list()
  .then(ports => {
    ports.forEach(port => {
      console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer || 'N/A'}`);
    });
  })
  .catch(error => {
    console.error('Error listing serial ports:', error);
  });
