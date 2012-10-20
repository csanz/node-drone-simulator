var dgram     = require("dgram")
  , msg_count = 0
  , fs        = require('fs') 
  , pnd       = require('./node_modules/ar-drone/lib/navdata/parseNavdata')

// Get message from simulator

ports = {
  FTP            : 5551,
  AUTH           : 5552,
  VIDEO_RECORDER : 5553,
  NAVDATA        : 5554,
  VIDEO          : 5555,
  AT             : 5556,
  RAW_CAPTURE    : 5557,
  PRINTF         : 5558,
  CONTROL        : 5559,
};


function parseAtData(buffer){
  var i = 0;
  var chr = "";
  var type = "";
  var body = "";

  while(i < buffer.length){
    console.log(String.fromCharCode(buffer[i]))

    if(buffer[i] === 61){
      console.log("= reached")
    }else{
      type += String.fromCharCode(buffer[i]);
      i++;
    }
  }

  // body = String.fromCharCode.apply("", buffer.slice(i, buffer.length - 2));
  
  console.log(type);
}

function createServer(name, port) {
  var server = dgram.createSocket("udp4")  
  server.on("message", function (msg, rinfo) {
    // if(msg[0] === 0x41){
      //  ignore
    // }else{
      // console.log(name, name === String.fromCharCode.apply(String, msg.slice(0, 2)))
      // console.log(String.fromCharCode.apply(String, msg.slice(6, msg.length - 1))); 
      // Array.prototype.forEach.call(msg, function(bit){
        
      // })
    // }
    if(name === "AT"){
      parseAtData(msg);
      throw "";
    }
  });


  server.on("listening", function () {
    var address = server.address();
    console.log(name, "listening",
        address.address + ":" + address.port);
  });

  server.bind(port);

  return server;
}

var servers = Object.keys(ports).map(function(key){
  return createServer(key, ports[key]);
})

process.on("exit", function(){
  servers.forEach(function(server){
    server.close();
  });
});