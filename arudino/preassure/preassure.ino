const int pressureSensorPin = A2; // Analog pin connected to the pressure sensor

void setup() {
  Serial.begin(9600); // Initialize serial communication
}

void loop() {
  int sensorValue = analogRead(pressureSensorPin); // Read the analog value from the sensor
  float pressure = convertToPressure(sensorValue); // Convert the sensor value to pressure (adjust this function as needed)
  
  // Print the sensor value and pressure to the serial monitor
  // Serial.print("Sensor Value: ");
  Serial.println(sensorValue);
  // Serial.print("Pressure: ");
  // Serial.println(pressure);

  // delay(1000); // Delay for 1 second (adjust as needed)
}

// Function to convert analog sensor value to pressure (adjust this function based on your sensor's specifications)
float convertToPressure(int sensorValue) {
  // You'll need to determine the conversion formula based on your sensor's datasheet.
  // This example assumes a linear relationship between sensor value and pressure.
  // Replace this with the actual conversion formula.
  float pressure = map(sensorValue, 0, 1023, 0, 100); // Example mapping from 0-1023 to 0-100 psi
  return pressure;
}
