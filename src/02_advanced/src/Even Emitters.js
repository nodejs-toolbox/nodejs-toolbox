/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var data = '';
req
  .on('data', function(chunk) {
    data += chunk;
  })
  .on('end', function() {
    console.log('POST data: %s', data);
  })

var onData = function(chunk) {
  console.log(chunk);
  req.removeListener(onData);
}

req.on('data', onData);