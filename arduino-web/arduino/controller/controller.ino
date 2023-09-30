#include <Adafruit_CircuitPlayground.h>
#include "Keyboard.h"

const float THRESHOLD = 8.0;
const unsigned long ACTION_DELAY = 2000;
const unsigned long CHECK_INTERVAL = 50;
const unsigned long SWING_TIMEOUT = 200;

bool swingDetected = false;
unsigned long swingStartTime = 0;
unsigned long lastActionTime = 0;

void setup() {
  // Initialize Circuit Playground library
  CircuitPlayground.begin();
  // Initialize Arduino mouse library
  Keyboard.begin();
  Serial.begin(9600);
}

void loop() {
  if (!CircuitPlayground.slideSwitch()) {
    return;
  }

  // Read the X axis acceleration
  float x = CircuitPlayground.motionX();
  Serial.print("X: ");
  Serial.println(x);

  // Get the current time
  unsigned long currentTime = millis();

  // Swing start condition
  if (!swingDetected && (x > THRESHOLD || x < -THRESHOLD)) {
    swingDetected = true;
    swingStartTime = currentTime;
  }

  // Swing end condition
  if (swingDetected && currentTime - swingStartTime > SWING_TIMEOUT) {
    swingDetected = false;
    if (x < THRESHOLD && x > -THRESHOLD) {
      if (currentTime - lastActionTime > ACTION_DELAY) {
        if (x < 0) {
          Keyboard.write('s');
        } else {
          Keyboard.write('w');
        }
        lastActionTime = currentTime;
      }
    }
  }

  delay(CHECK_INTERVAL);
}