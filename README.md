# Wait Times analysis tool

TODO: come up with better name

This is a set of scripts to grab waittimes for parks supported by the [wdwJS](https://github.com/cubehouse/wdwJS) node library.

* [cubehouse/wdwJS: Unofficial API for accessing ride wait times and schedules for Disney theme parks]( https://github.com/cubehouse/wdwJS )

*app.js* will output the wait times for Disneyland and California Adventure in csv format. Call it like this:

```
/usr/local/bin/node app.js >disney_out/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
``` 

*run disney script.scpt* - a simple AppleScript that runs the command.  I put it into a scheduler to run every 5 minutes.  Yes, cron should do this but I was having a fail at midnight getting it to work so I did this instead. 

# Cleaning up the data 

the clean_data.sh script will clean up and combine data files.
TODO: I should really fix app.js to output it better (all items should be in quotes for CSV to parse right)

# Create wait time graphs

run rideWaitAnalysis.py and pass in name of the csv file created by clean_data.sh

NOTE: there are a lot of assumptions about the directory structure for all these files.  Read the code to figure it out.

# Example Usage

```
22:20:23[2421] bgebhardt in ~/code/personal/waittimes/disney_out/2016-07-20 on master*
⚡ ../../clean_data.sh 2016-07-20.csv
## processing 2016-07-20.csv...
## 2016-07-20.csv processing complete
22:21:06[2422] bgebhardt in ~/code/personal/waittimes/disney_out/2016-07-20 on master*
⚡ ../../python/rideWaitAnalysis.py 2016-07-20.csv
```

# Directory layout assumptions
2016-07-18 # must be named for the same date as the date in all the csv file names
├── individual csv files
├── bak/ # backup after clean_data.sh
└── figures/ # where the rideWaitAnalysis.py graphs go

# TODO

* put all days together ???
* come up with an install script to install node_modules (or package it up)