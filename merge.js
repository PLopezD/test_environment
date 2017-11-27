var merge = require('package-merge');
var fs = require('fs');
// var merge = require('./json-merge');

var dst = fs.readFileSync('/Users/pablolopez/Desktop/tutorials/yo_angular_gulp/package.json');
var src = fs.readFileSync('/Users/pablolopez/Desktop/projects/x1-explore-webapp/package.json');

// Create a new `package.json` 
console.log(merge(dst, src));