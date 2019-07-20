// Script to collect themepark wait times.

// include the Themeparks library
var Themeparks = require("themeparks");
var process = require('process');

// for debugging
//console.error("### process id = " + process.pid);

Themeparks.Settings.CacheWaitTimesLength = 60 * 2; // set to 2 minutes

// list all the parks supported by the library
// for (var park in Themeparks.Parks) {
//     console.log("* " + new Themeparks.Parks[park]().Name + " (DisneyAPI." + park + ")");
// }

// * California Adventure - Disneyland Resort (DisneyAPI.DisneylandResortCaliforniaAdventure)
// * Magic Kingdom - Disneyland Resort (DisneyAPI.DisneylandResortMagicKingdom)
// * Universal Studios Hollywood (DisneyAPI.UniversalStudiosHollywood)
var Disneyland = new Themeparks.Parks.DisneylandResortMagicKingdom();
var DisneyCA = new Themeparks.Parks.DisneylandResortCaliforniaAdventure();
var universalStudiosHollywood =
  new Themeparks.Parks.UniversalStudiosHollywood();

// print csv header
console.log("park, ride_name, wait_time, status, date-time, fast_pass");

// access wait times by Promise
const CheckDisneylandTimes = () => {
  Disneyland.GetWaitTimes().then((rides) => {
    printParkInfo("Disneyland", rides);
  }).catch((error) => {
      console.error(error);
  });
};
CheckDisneylandTimes();

// Access wait times by Promise
const CheckDisneyCATimes = () => {
  DisneyCA.GetWaitTimes().then((rides) => {
    printParkInfo("California Adventure", rides);
  }).catch((error) => {
      console.error(error);
  });
};
CheckDisneyCATimes();

// Access wait times by Promise
const CheckUniversalStudiosHollywoodTimes = () => {
  universalStudiosHollywood.GetWaitTimes().then((rides) => {
    printParkInfo("Universal Studios Hollywood", rides);
  }).catch((error) => {
      console.error(error);
  });
};
CheckUniversalStudiosHollywoodTimes();

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
      console.log("\"" + parkName + "\",\"" + ride.name.replace(/\"/g,'\""') + "\",\"" + ride.waitTime + "\",\"" + ride.status + "\",\"" + dateTime + "\",\"" + ride.fastPass.toString() + "\"");
    }
  }
}

// force an exit after 2 minutes to avoid process leaks
// [How to Exit in Node.js](https://stackabuse.com/how-to-exit-in-node-js/)
// this command can be used to kill any processes (saving here as FYI only)
//  ps -A | grep node | grep wait | awk '{print $1}' | xargs kill
setTimeout((function() {
  return process.exit();
}), 2 * 60 * 1000);