/*
*    Title: Dallas Temperature Control Library
*    Author: Miles Burton
*    Accessed on: 2023/09/01
*    Availability: https://github.com/milesburton/Arduino-Temperature-Control-Library
*    License: GNU Lesser General Public License v2.1
*    Modify by: Guo Cheng
*/
// Include the libraries we need
// Availability: https://github.com/PaulStoffregen/OneWire by Paul Stoffregen
#include <OneWire.h>
#include <Adafruit_CircuitPlayground.h>
#include <Adafruit_Circuit_Playground.h>
#include <Adafruit_CircuitPlayground.h>
#include "Keyboard.h"
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 12
float previousTempC = -1000;
// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature.
DallasTemperature sensors(&oneWire);

/*
 * The setup function. We only start the sensors here
 */
void setup(void)
{
  // Initialize Circuit Playground library.
  CircuitPlayground.begin();
  // Initialize Arduino mouse library.
  Keyboard.begin();
  // start serial port
  Serial.begin(9600);
  // Start up the library
  sensors.begin();
}

/*
 * Main function, get the temperature data
 */
void loop(void)
{
  if (!CircuitPlayground.slideSwitch()) {
    return;
  }


  sensors.requestTemperatures(); // Send the command to get temperatures
  float tempC = sensors.getTempCByIndex(0);

  // Check if reading was successful
  if (tempC != DEVICE_DISCONNECTED_C)
  {
    // Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
    Serial.print("\t");
    Serial.println(previousTempC);
    // Check if the temperature has risen by 1 degree
    if (previousTempC == -1000) {
      previousTempC = tempC;
    }

    if(previousTempC != -1000 && (tempC - previousTempC) >= 1.0)
    {
      Serial.println("Temp Increased!");
      Keyboard.write('d');
      previousTempC = tempC;
    }

    if (tempC < previousTempC) {
      Serial.println("Temp Decreased!");
      previousTempC = tempC;
    }
    
    // slepp for 1 seconds
    delay(1000);
  }
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
//
