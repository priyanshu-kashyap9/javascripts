#include <LiquidCrystal.h>

// Pin definitions for LCD
int RS = 10, E = 9, D4 = 8, D5 = 7, D6 = 6, D7 = 5;
LiquidCrystal lcd(RS, E, D4, D5, D6, D7);

// Pin definitions for first sensor
const int trigPin1 = 2;
const int echoPin1 = 3;
const int Relay1 = 4;
long duration1;
int distance1;
int safetyDistance1 = 20;  // Set a safety threshold in centimeters

// Pin definitions for second sensor
const int trigPin2 = 12;
const int echoPin2 = 13;
const int Relay2 = 11;
long duration2;
int distance2;
int safetyDistance2 = 20;  // Set a safety threshold for second sensor

void setup() {
  lcd.begin(16, 2); // Initialize the LCD screen
  
  // Pin setup for first sensor
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(Relay1, OUTPUT);

  // Pin setup for second sensor
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
  pinMode(Relay2, OUTPUT);

  // Display a startup message on the LCD
  lcd.setCursor(0, 0);
  lcd.print("Sensors Ready");
  delay(2000); // Wait for 2 seconds
}

void loop() {
  // Read distance from the first ultrasonic sensor
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  
  duration1 = pulseIn(echoPin1, HIGH);
  distance1 = duration1 * 0.0344 / 2; // Calculate distance in cm
  
  // Read distance from the second ultrasonic sensor
  digitalWrite(trigPin2, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);
  
  duration2 = pulseIn(echoPin2, HIGH);
  distance2 = duration2 * 0.0344 / 2; // Calculate distance in cm

  // Display the distance from both sensors on the LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Sensor 1: ");
  lcd.print(distance1);
  lcd.print(" cm");

  lcd.setCursor(0, 1);
  lcd.print("Sensor 2: ");
  lcd.print(distance2);
  lcd.print(" cm");

  // Control Relay 1 based on distance from sensor 1
  if (distance1 < safetyDistance1) {
    digitalWrite(Relay1, HIGH); // Turn on Relay 1
  } else {
    digitalWrite(Relay1, LOW);  // Turn off Relay 1
  }

  // Control Relay 2 based on distance from sensor 2
  if (distance2 < safetyDistance2) {
    digitalWrite(Relay2, HIGH); // Turn on Relay 2
  } else {
    digitalWrite(Relay2, LOW);  // Turn off Relay 2
  }

  delay(500); // Delay for 0.5 seconds before repeating
}