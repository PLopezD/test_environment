var moment = require('moment');
require('moment-recur');

var recurrence = moment().recur("01/01/2014", "01/07/2014").every(2).days();

// Outputs: ["01/01/2014", "01/03/2014", "01/05/2014", "01/07/2014"]

allDates = recurrence.all("L");

console.log(allDates);