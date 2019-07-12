// Script to collect themepark wait times.

// include the Themeparks library
var Themeparks = require("themeparks");

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
Disneyland.GetWaitTimes().then(function(rides) {
  printParkInfo("Disneyland", rides);

  // print each wait time
  // for(var i=0, ride; ride=rides[i++];) {
  //     console.log(ride.name + ": " + ride.waitTime + " minutes wait");
  // }
}, console.error);

// access wait times by Promise
DisneyCA.GetWaitTimes().then(function(rides) {
  printParkInfo("California Adventure", rides);
}, console.error);

universalStudiosHollywood.GetWaitTimes().then(function(rides) {
  printParkInfo("Universal Studios Hollywood", rides);
}, console.error);

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
