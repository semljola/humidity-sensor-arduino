var SerialPort = require("serialport");
var config = require('./config.json');
var plotly = require('plotly')(config.plotlyUsername,config.plotlyPassword);

var mySerialport = new SerialPort("/dev/tty.usbmodem1421", {
  parser: SerialPort.parsers.readline('\n')
});

/*Graph*/
var data = [{x:[], y:[], stream:{token:config.streamToken, maxpoints:200}}];
var graphOptions = {fileopt : "extend", filename : "nodenodenode"};

plotly.plot(data,graphOptions,function() {

  
});

var stream = plotly.stream(config.streamToken, function (res) {
	console.log(res);
});

mySerialport.on('open', function(){
	console.log('Serial Port Opend');
	var i = 0;
	mySerialport.on('data', function(data){
		console.log(data);

		var streamObject = JSON.stringify({ x : i*i, y : i++ });
      	stream.write(streamObject+'\n');
		
	});
});