// Import the interface to Tessel hardware
var tessel = require('tessel');

// Turn one of the LEDs on to start.
tessel.led[2].on();

// Blink!
setInterval(function () {
  tessel.led[1].toggle();
  tessel.led[2].toggle();
}, 100);
setInterval(function(){
    tessel.led[3].toggle();
}, 2000);

console.log("I'm blinking! (Press CTRL + C to stop)");
