// Setup API
var DisneyAPI = require('wdwjs');

// List theme parks supported by API
/*
for (var park in DisneyAPI) {
  console.log("* " + new DisneyAPI[park]().name + " (DisneyAPI." + park + ")");
}
*/

var Disneyland = new DisneyAPI.DisneylandMagicKingdom();
var DisneyCA = new DisneyAPI.DisneylandCaliforniaAdventure();

// print csv header
console.log("park, ride_name, wait_time, status, date-time");

// Get Magic Kingdom wait times
Disneyland.GetWaitTimes(function(err, data) {
  if (err) {
    return console.error("Error fetching wait times: " + err);
  }
  printParkInfo("Disneyland", data);
});

DisneyCA.GetWaitTimes(function(err, data) {
  if (err) {
    return console.error("Error fetching wait times: " + err);
  }
  printParkInfo("California Adventure", data);
});

function printParkInfo(parkName, waitTimeArray) {
//  console.log("=============================");
//  console.log("wait times: " + waitTimeArray.length);
  var currentdate = new Date();
//  console.log(currentdate);
// console.log(waitTimeArray) // uncomment this line to see the JSON reponses; for testing
  printWaitTimesCSV(parkName, waitTimeArray, currentdate);
  // console.log(JSON.stringify(DisneylandWaitTimes, null, 2));
}

function printWaitTimesCSV(parkName, waitTimeArray, dateTime) {
  for (var index in waitTimeArray) {
    if (waitTimeArray.hasOwnProperty(index)) {
      var ride = waitTimeArray[index];
	  // escaping quotes in ride names to be "" instead of single "'s.  Ruby csv importer requires that instead of \".  See:
	  // [Ruby CSV parsing string with escaped quotes - Stack Overflow](https://stackoverflow.com/questions/14534522/ruby-csv-parsing-string-with-escaped-quotes)
      console.log("\"" + parkName + "\",\"" + ride.name.replace(/\"/g,'\""') + "\",\"" + ride.waitTime + "\",\"" + ride.status + "\",\"" + dateTime + "\"");
    }
  }
}

/*
// Get Magic Kingdom opening times
MagicKingdom.GetOpeningTimes(function(err, data) {
  if (err) return console.error("Error fetching Magic Kingdom schedule: " + err);

  console.log(JSON.stringify(data, null, 2));
});
*/
