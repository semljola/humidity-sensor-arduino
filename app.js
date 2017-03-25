var SerialPort = require("serialport").SerialPort;

var mySerialport = new SerialPort("/dev/tty.usbmodem1421", {
  parser: SerialPort.parsers.readline('\n')
});

mySerialport.on('open', function(){
	console.log('Serial Port Opend');
	mySerialport.on('data', function(data){
		console.log(data);
	});
});