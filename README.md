# Wait Times analysis tool

TODO: come up with better name

This is a set of scripts to grab waittimes for parks supported by the [themeparks](https://github.com/cubehouse/themeparks) node library.

Reference Links:
* [GitHub - cubehouse/themeparks: Unofficial API for accessing ride wait times and schedules for Disneyland, Disney World, Universal Studios, and many more parks](https://github.com/cubehouse/themeparks)
* [Migrating from 3.0 to 4.0 · cubehouse/themeparks Wiki · GitHub](https://github.com/cubehouse/themeparks/wiki/Migrating-from-3.0-to-4.0)
* [cubehouse/wdwJS: DEPRECATED - Moved to cubehouse/themeparks](https://github.com/cubehouse/wdwJS) - Unofficial API for accessing ride wait times and schedules for Disney theme parks

## Installing and Collecting data

1. **Install the npm**
```
npm install themeparks --save
npm install cache-manager --save
npm install cache-manager-fs-binary --save
```

2. **Run the wait_times.js script**
*wait_times.js* will output the wait times for Disneyland, California Adventure, and Universal Hollywood Studios in csv format. Call it like this:

```
/usr/local/bin/node wait_times.js >disney_out/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
```

3. **Install as a Cronjob**
*run_disney.sh* - simple script you can put in cron to run the script periodically.

Add the following crontab entry to run it [every 5 minutes](https://crontab.guru/every-5-minutes).  The time command will help with debugging long runs.
```
*/5	*	*	*	*	/usr/bin/time /Users/bryan/code/personal/waittimes/run_disney.sh 2>|/tmp/disney_time.log
```

Use ```tail -F /tmp/disney_time.log``` to watch the running time to debug long running time.

*run disney script.scpt* - a simple AppleScript that runs the command.  No longer needed.

## Loading data into ELK stack

### Running it

You can set up the ELK stack by running or following the commands in ```setup-mac.sh```.

You can run the ELK stack on your localhost with ```run-elk.sh```.  This assumes you're running in the waittimes repo directory.  This will start logstash processing csv files from the disney_out directory that you run in the "Collecting the data" step.

Go to kibana at [http://localhost:5601/](http://localhost:5601/) and login with the elastic user.

To kill the elk stack run ```ps -aw | egrep "(kibana|logstash|elasticsearch)"``` and kill each process.  **TODO:** find better way to do this.

### Reseting ELK

To start over:

1. Kill the logstash process.  
2. In Kibana execute ```DELETE /disney-waittimes``` to delete the index.
3. Delete the sensedb_disney file in the waittimes directory.  This will make logstash reload all data again.
4. Run logstash again.  It'll reload everything.

## Graphing data with pandas and matlab

### Cleaning up the data 

the clean_data.sh script will clean up and combine data files.

### Create wait time graphs

run rideWaitAnalysis.py and pass in name of the csv file created by clean_data.sh

![example graph](https://github.com/bgebhardt/waittimes/blob/master/California%20Adventure-Radiator%20Springs%20Racers--2016-07-20.png "Example Graph")

NOTE: there are a lot of assumptions about the directory structure for all these files.  Read the code to figure it out.


## Example Usage

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

* Features
	* Add fast pass return times
	* Check if ride is active or not
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
