const int OUT_PIN = A2;

void setup() 
{
  //initialise the keyboard library
  Serial.begin(9600); //begin Serial Communication
}
 
void loop()
{
  // Serial.println(digitalRead(OUT_PIN));
  int sound = analogRead(OUT_PIN);
  // Serial.println(sound);
  Serial.println(sound);

  // if (sound > 574) { 
    // Serial.println("         ||        ");
    // Serial.println("       ||||||      ");
    // Serial.println("     |||||||||     ");
    // Serial.println("   |||||||||||||   ");
    // Serial.println(" ||||||||||||||||| ");
    // Serial.println("   |||||||||||||   ");
    // Serial.println("     |||||||||     ");
    // Serial.println("       ||||||      ");
    // Serial.println("         ||        ");
    // Serial.println("1");
  // }
}