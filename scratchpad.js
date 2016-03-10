LED1.write(true)
LED1.write(false)
LED2.write(true)

var log = function(led) {
  var data = led.read();
  console.log(data);
};

var toggle = function(led) {
  var state = led.read();
  LED1.write(!state);
};

var lastToggle;

var timeToggle = function(led) { //toggle with logging time
  var state = led.read();
  led.write(!state);
  var thisToggle = new Date();
  if (!lastToggle) {
    lastToggle = thisToggle;
  }
  var timeBtwToggles = thisToggle - lastToggle;
  lastToggle = thisToggle;
  return timeBtwToggles;
};
