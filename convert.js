// var fetch = require('node-fetch');
// var path = require('path');

// var filePath = path.resolve(__dirname, '_colors.scss');

// fetch(filePath)
//     .then(function(response) {
//         console.log('test');
//         colorPaletteColors = findColors('color-palettes', response)
//         // console.log(colorPaletteColors);
//     });

// function findColors(colorName, cssString) {
//   var startingIndex = cssString.search(colorName)
//   var startSplit = cssString.substring(startingIndex, cssString.length)
//   var endingIndex = startSplit.search(';')
//   var colorSubString = startSplit.substring(0, endingIndex)
//   colorSubString = colorSubString.substring(colorSubString.search(':') + 1, colorSubString.length)
//   colorSubString = colorSubString.replace(/\(/g, "{")
//       colorSubString = colorSubString.replace(/\)/g, "}")
//       console.log(colorSubString);
//       colorSubString = convertObjects(colorSubString)
//       return JSON.parse(colorSubString)
//   }

//   function replaceNumbers(colorSubString) {
//      console.log(colorSubString);
//  }

// var myString = "someth3ing f5orm74at_abc";
// var myRegexp = /\d{1,3}/g;
// match = myRegexp.exec(myString);
// while (match != null) {
//   // matched text: match[0]
//   // match start: match.index
//   // capturing group n: match[n]
//   console.log(match[0])
//   match = myRegexp.exec(myString)
//   console.log(match)
// }

var scssToJson = require('scss-to-json');
var path = require('path');
 
var filePath = path.resolve(__dirname, '_colors.scss');
var colors = scssToJson(filePath);


// function replaceNumbers(colorSubString) {
//   colorSubString.replace(/\d{1,3}/g, "}")
//   return "{'2':'3'}"
// }

// var myString = "someth3ing f5orm74at_abc";
// var myRegexp = /\d{1,3}/g;
// match = myRegexp.exec(myString);
// while (match != null) {
//   // matched text: match[0]
//   // match start: match.index
//   // capturing group n: match[n]
//   console.log(match[0])
//   match = myRegexp.exec(myString)
//   console.log(match)
// }
