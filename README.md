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

How to clean up the data files.
TODO: I should really fix app.js to output it better (all items should be in quotes for CSV to parse right)

```
# command to fix commas inplace with backup
# it still leaves an empty extra Goofy's sky school due to the <CR> in that item. :P
sed -i.bak -e 's/Monsters,/Monsters/g' -e 's/Fire Engine,/Fire Engine/g' -e 's/Streetcars,/Streetcars/g' -e 's/Carriage,/Carriage/g' -e 's/Omnibus,/Omnibus/g' -e 's/^,/California Adventure,Goofys Sky School,/g' *.csv
mkdir bak
mv *.bak bak
cat *.csv > 2016-07-18.csv  # TODO: change the date name when doing this
grep -v park # removes header
```

header to add to file

```
park	 ride name	 wait time	 status	 date-time
```
