const dns = require('dns');

//It's look into libuv thread
// dns.lookup('google.com', (err, address) =>{
//   console.log(address);
// });

// dns.resolve4('google.com', (err, address) => {
//   console.log(address);
// });

// dns.resolve('google.com', 'A', (err, address) => {
//   console.log(address);
// })
//
// dns.resolve('google.com', 'MX', (err, address) => {
//   console.log(address);
// })

dns.reverse('54.68.224.220', (err, hostnames) => {
  console.log(hostnames);
})
