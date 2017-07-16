# Wait Times analysis tool

TODO: come up with better name

This is a set of scripts to grab waittimes for parks supported by the [wdwJS](https://github.com/cubehouse/wdwJS) node library.

* [cubehouse/wdwJS: Unofficial API for accessing ride wait times and schedules for Disney theme parks]( https://github.com/cubehouse/wdwJS )

## Collecting the data

*app.js* will output the wait times for Disneyland and California Adventure in csv format. Call it like this:

```
/usr/local/bin/node app.js >disney_out/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
``` 

*run_disney.sh* - simple script you can put in cron to run the script periodically.

Add the following crontab entry to run it every 5 minutes. 
```
*/5	*	*	*	*	/Users/bryan/code/personal/waittimes/run_disney.sh
```

*run disney script.scpt* - a simple AppleScript that runs the command.  No longer needed.

## Cleaning up the data 

the clean_data.sh script will clean up and combine data files.

## Create wait time graphs

run rideWaitAnalysis.py and pass in name of the csv file created by clean_data.sh

![example graph](https://github.com/bgebhardt/waittimes/blob/master/California%20Adventure-Radiator%20Springs%20Racers--2016-07-20.png "Example Graph")

NOTE: there are a lot of assumptions about the directory structure for all these files.  Read the code to figure it out.


# Example Usage

Assumes you are running in the directory with all your csv files.  Pass in the date you wish to process.

```
$ ../clean_data.sh 2016-07-20
## processing 2016-07-20.csv...
## 2016-07-20.csv processing complete

$ ../python/rideWaitAnalysis.py all_2016-07-20.csv

```

# Directory layout assumptions

```
2016-07-18 # must be named for the same date as the date in all the csv file names
├── individual csv files
├── bak/ # backup after clean_data.sh
└── figures/ # where the rideWaitAnalysis.py graphs go
```

# TODO

* Data Collection
	* create a better way to collect the data; node daemon process? get it working with cron?
* Data clean up
	* improve clean up to not be so fragile (must be in right directly, etc.)
	* remove tmp files
	* put all days together ???
* Analysis
	* remove graphs for closed rides or rides with a max wait time of zero.
* Other
	* create test cases
	* come up with an install script to install node_modules (or package it up)
