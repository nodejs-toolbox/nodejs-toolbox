/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var use_modules = 1;
var parser = require('File IO - Module Parser');
// Load the fs (filesystem) module

var fs = require('fs');
//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
console.log("first samlpe");
// Read the contents of the file into memory.

fs.readFile('input.txt', function (err, logData) {

    if (err) {
        throw err;
    }

    // logData is a Buffer, convert to string.
    var text = logData.toString();
    
    var results = {};
    if (use_modules === 1) {
        // Create an instance of the Parser object.
        var parser = new Parser();
        results = parser.parse(text);
    } else {
        // Break up the file into lines.
        var lines = text.split('\n');
        lines.forEach(function (line) {
            var parts = line.split(' ');
            var letter = parts[1];
            var count = parseInt(parts[2]);
            if (!results[letter]) {
                results[letter] = 0;
            }

            results[letter] += parseInt(count);
        });
    }
    
    console.log(results);
    // { A: 2, B: 14, C: 6 }
});