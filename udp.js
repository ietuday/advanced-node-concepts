const dgram = require('dgram');

//Server
const server = dgram.createSocket('udp4');

server.on('listening',() => console.log('UDP server listening'));

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

const PORT = 3333;
const HOST = '127.0.0.1';

server.bind(PORT, HOST);


//Client
// setInterval(function(){
//   const client = dgram.createSocket('udp4');
//
//   client.send('Sending message from client', PORT, HOST, (err) =>{
//     if(err) throw err ;
//     console.log('UDP message sent');
//     client.close();
//   })
// },1000);


const client = dgram.createSocket('udp4');
const msg = Buffer.from('Sending message from client');

  client.send(msg, 0, msg.length, PORT, HOST, (err) =>{
    if(err) throw err ;
    console.log('UDP message sent');
    client.close();
  })


//   client.send(msg, 0, 11, PORT, HOST, (err) =>{
//     if(err) throw err ;
//     console.log('UDP message sent');
//     client.send(msg, 11, msg.length, PORT, HOST, (err) =>{
//       if(err) throw err ;
//       console.log('UDP message sent');
//       client.close();
//   });
// });
