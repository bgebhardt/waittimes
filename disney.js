// Setup API
var DisneyAPI = require("wdwjs");

// List theme parks supported by API
for (var park in DisneyAPI) {
  console.log("* " + new DisneyAPI[park]().name + " (DisneyAPI." + park + ")");
}

var MagicKingdom = new DisneyAPI.WaltDisneyWorldMagicKingdom();

// Get Magic Kingdom wait times
MagicKingdom.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

    console.log(JSON.stringify(data, null, 2));
});

// Get Magic Kingdom opening times
MagicKingdom.GetOpeningTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom schedule: " + err);

    console.log(JSON.stringify(data, null, 2));
});