// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var opn = require('opn');
var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

// Initialize the accelerometer.
accel.on('ready', function () {
// Stream accelerometer data
accel.on('data', function (xyz) {
  console.log('x:', xyz[0].toFixed(2),
    'y:', xyz[1].toFixed(2),
    'z:', xyz[2].toFixed(2));

    if(xyz[0] > 0.20){

//      var opn = require('opn');
      opn('http://www.google.com').then(function(cp) {
        console.log('child process:',cp);
        console.log('worked');
      }).catch(function(err) {
        console.error(err);
      });

      console.log('x is definitely greater than 0.20');

// specify the app to open in
      //opn('http://sindresorhus.com', {app: 'firefox'});

      process.exit(1);
      setInterval(function() {
        tessel.led[1].toggle();
      }, 300);
    } else {
      console.log('x is less than 0.20');
    }
});

});

accel.on('error', function(err){
  console.log('Error:', err);
});