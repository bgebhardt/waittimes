#!/usr/bin/env bash
 
# will move files going back $1 (passed in) days
# this will turn a directory of files into a directory of dated folders
# hardcoded to my specific need but could be generalized to apply to any directory if you know the date formating in the file name

# pass in number of days
last_day=$1
day=0

echo "moving files for $last_day days"

while [[ $day -le $last_day ]]; do
	#statements
	
	the_date=`date -v-${day}d +%F`
	
	echo "processing day $date (${day})"

	mkdir -p /Users/bryan/code/personal/waittimes/disney_out/${the_date}
	mv -i /Users/bryan/code/personal/waittimes/disney_out/${the_date}-* /Users/bryan/code/personal/waittimes/disney_out/${the_date}/
	
	# TODO: if no files to move I get this error.  How to check for it?
	#processing day  (0)
	#	mv: rename /Users/bryan/code/personal/waittimes/disney_out/2017-09-01-* to /Users/bryan/code/personal/waittimes/disney_out/2017-09-01/2017-09-01-*: No such file or directory

	day=$[$day+1]
	# create directory for day
done