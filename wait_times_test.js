// Script to collect themepark wait times.

// include the Themeparks library
var Themeparks = require("themeparks");

// initialise caching (see https://github.com/BryanDonovan/node-cache-manager)
// var cacheManager = require('cache-manager');
// Themeparks.Settings.Cache = cacheManager.caching({
//   store: require('cache-manager-fs-binary'),
//   options: {
//     reviveBuffers: false,
//     binaryAsStream: true,
//     ttl: 60 * 60,
//     maxsize: 1000 * 1000 * 1000,
//     path: 'diskcache',
//     preventfill: false
//   }
// });

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

//Disneyland.GetWaitTimes().then(function(rides) {
  // printParkInfo("Disneyland", rides);
  // print each wait time
//   for (var i=0, ride; ride=rides[i++];) {
//     console.log(ride.name + ": " + ride.waitTime + " minutes wait");
//     console.log(JSON.stringify(ride, null, 2));
//   }
// }, console.error);

// Example from themparks github
// Access wait times by Promise
// const CheckWaitTimes = () => {
//   Disneyland.GetWaitTimes().then((rideTimes) => {
//       rideTimes.forEach((ride) => {
//           console.log(`${ride.name}: ${ride.waitTime} minutes wait (${ride.status})`);
//       });
//   }).catch((error) => {
//       console.error(error);
//   });
// };
// CheckWaitTimes();

// change inspired by example from themparks github
// access wait times by Promise
// const CheckDisneylandWaitTimes = () => {
//   Disneyland.GetWaitTimes().then((rideTimes) => {
//     printParkInfo("Disneyland", rideTimes);
//   }).catch((error) => {
//     console.error(error);
//   }); 
// };
// CheckDisneylandWaitTimes();

// // access wait times by Promise
// DisneyCA.GetWaitTimes().then(function(rides) {
//   printParkInfo("California Adventure", rides);
// }, console.error);

// universalStudiosHollywood.GetWaitTimes().then(function(rides) {
//   printParkInfo("Universal Studios Hollywood", rides);
// }, console.error);

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

// New style of calling

// Access wait times by Promise
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

// ----

// // access wait times by Promise
// Disneyland.GetWaitTimes().then(function(rides) {
//   printParkInfo("Disneyland", rides);

//   // print each wait time
//   // for(var i=0, ride; ride=rides[i++];) {
//   //     console.log(ride.name + ": " + ride.waitTime + " minutes wait");
//   // }
// }, console.error);

// // access wait times by Promise
// DisneyCA.GetWaitTimes().then(function(rides) {
//   printParkInfo("California Adventure", rides);
// }, console.error);

// universalStudiosHollywood.GetWaitTimes().then(function(rides) {
//   printParkInfo("Universal Studios Hollywood", rides);
// }, console.error);
