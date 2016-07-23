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
console.log("park, ride name, wait time, status, date-time");

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
  printWaitTimesCSV(parkName, waitTimeArray, currentdate);
  // console.log(JSON.stringify(DisneylandWaitTimes, null, 2));
}

function printWaitTimesCSV(parkName, waitTimeArray, dateTime) {
  for (var index in waitTimeArray) {
    if (waitTimeArray.hasOwnProperty(index)) {
      var ride = waitTimeArray[index];
      console.log(parkName + "," + ride.name + "," + ride.waitTime + "," + ride.status + "," + dateTime);
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
